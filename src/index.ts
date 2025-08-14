import { Client, LocalAuth, Chat } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import cron from 'node-cron';

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', (qr: string) => {
    console.clear();
    console.log('Escaneie o QR Code abaixo no WhatsApp Web:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('🤖 Bot conectado e pronto!');

    const chats: Chat[] = await client.getChats();
    const grupo = chats.find(c => c.isGroup && c.name === 'NOME_DO_GRUPO');

    if (!grupo) {
        console.error('Grupo não encontrado!');
        return;
    }

    const groupId = grupo.id._serialized;

    // Agendamento: toda quarta às 8:00
    cron.schedule('0 8 * * 3', async () => {
        try {
            await client.sendMessage(groupId, 'Mensagem da quarta-feira meus bacanos ⏰');
            console.log('Mensagem enviada ao grupo!');
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    });
});

// Inicializar o bot
client.initialize();
