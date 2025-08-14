## Buscar um grupo pelo nome

```js
const chats = await client.getChats();
const myGroup = chats.find((chat) => chat.name === "Momô❤️");
console.log("Meu grupo JID:", myGroup.id.\_serialized);
```

> Para agendar a rotina toda quarta-feira usando node-cron, você só precisa ajustar a expressão cron:
>
> O formato é: **minuto hora dia_do_mês mês dia_da_semana**
>
> - minuto → 0-59
> - hora → 0-23
> - dia_do_mês → 1-31
> - mês → 1-12
> - dia_da_semana → 0-6 (0 = domingo, 3 = quarta-feira)
>   Exemplo: toda quarta às 11:51
>
> ```js
> cron.schedule("51 11 * * 3", async () => {
>   const chat = await client.getChatById("ID_DO_GRUPO@g.us");
>   await chat.sendMessage("Mensagem da quarta-feira ⏰");
>   console.log("Mensagem enviada toda quarta às 11:51!");
> });
> ```
