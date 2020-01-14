const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const { Client, Attachment } = require('discord.js');
const fs = require('fs');

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '入退室ログ');
  if (!channel) return;
  channel.send({
    embed:{
      title:"新しい人がやってきました！",
      color:3066993,
      timestamp:new Date(),
      fields:[
        {
          name: "入室者",
          value:`${member} さんです！よろしくお願いします！`
        }
      ]
    }
  });
});

//bot.on('guildMemberAdd', member => {

//  let checkNewMemberSent = function () {
    //  let tmp = member.lastMessage; //判定のため一時的に格納

   //   if (tmp === null || tmp.type === "GUILD_MEMBER_JOIN") {
    //      member.ban()
       //       .then(banned => console.log(`${member.name}は発言しなかったのでBANされました`))
     //         .catch(console.error); //権限エラーなどを拾う
   //   }
 // }

 // setTimeout(checkNewMemberSent,6000000000); // 600000ミリ秒後に、メンバーがメッセージを送信したか確認する
// });//自動ban


bot.on('message', (message) => {

  if(message.content == 'おやすみ') {
      message.channel.sendMessage('お疲れ様でした!どうぞごゆっくり疲れをいやしてください！')
  }//おやすみ

  if(message.content == 'おはよう') {
      message.channel.sendMessage('おはようございます！朝ごはんはちゃんと食べてね！')
  }//おはよう

      if(message.isMemberMentioned(bot.user))
    {
        message.reply( '呼びましたか？' );
        return;
    }

    if(message.content == 'どうにかして') {
      message.channel.sendMessage('すみません…。私にはどうにもできません…。')
  }

      if(message.content == '暇') {
      message.channel.sendMessage('平和ですねぇ…。')
  }

      if(message.content == 'こんにちは') {
      message.channel.sendMessage('こんにちは！')
  }

        if(message.content == 'なんてことだ') {
      message.channel.sendMessage('な、何があった！')
  }

          if(message.content == 'よろしくっ(*｀･ω・)ゞ') {
      message.channel.sendMessage('よろしく！')
  }

            if(message.content == 'こんばんは') {
      message.channel.sendMessage('こんばんは！いい夜ですね！')
  }

            if(message.content == 'こんばんわ') {
      message.channel.sendMessage('こんばんわ！いい夜ですね！')
  }

              if(message.content == 'しんきんぐ') {
                 message.delete().catch(O_o=>{});
      message.channel.sendMessage(':thinking:')
  }

  if(message.content == 'バグ'){
    message.delete();
    const emoji = bot.emojis.find("name", "OwO_failed")
    message.channel.send( emoji.toString() );
  }

  if(message.content == '低才能値九尾出ない'){
    message.channel.sendMessage('ガンバルドォン！www')
  }

  if(message.content == '疲れた'){
    message.channel.sendMessage('あっそ()')
  }

  if(message.content == '草'){
    message.channel.sendMessage('🌵🌲🌳🌴🌱🌿☘️🍀🍃🍂🌵🌲🌳🌴🌱🌿☘️🍀🍃🍂')
  }

    if (message.content == 'しんきんぐ'){
    message.delete();
    const emoji = bot.emojis.find( "name", "loop_thinking" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'しんきんぐ2かいてん'){
    message.delete();
    const emoji = bot.emojis.find( "name", "thinkingkaiten" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'しんきんぐぐちゃ'){
    message.delete();
    const emoji = bot.emojis.find( "name", "thinkinggutya" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'しんきんぐうんこ'){
    message.delete();
    const emoji = bot.emojis.find( "name", "thinkingunko" );
    message.channel.send( emoji.toString() );
  }

      if (message.content == 'しんきんぐうごうご'){
    message.delete();
    const emoji = bot.emojis.find( "name", "thinkingugougo" );
    message.channel.send( emoji.toString() );
  }

      if (message.content == 'しんきんぐ2くるくる'){
    message.delete();
    const emoji = bot.emojis.find( "name", "thinkingukurukuru2" );
    message.channel.send( emoji.toString() );
  }

      if (message.content == 'しんきんぐくるくる'){
    message.delete();
    const emoji = bot.emojis.find( "name", "thinkingkurukuru" );
    message.channel.send( emoji.toString() );
  }

      if (message.content == '頭おかしいよ'){
    message.delete();
    const emoji = bot.emojis.find( "name", "kokokoko" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'まって'){
    message.delete();
    const emoji = bot.emojis.find( "name", "wait" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'ロード'){
    const emoji = bot.emojis.find( "name", "loading" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'ぴょんぴょん'){
    message.delete();
    const emoji = bot.emojis.find( "name", "jumping_owo_type3" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'かまって'){
      message.delete();
    const emoji = bot.emojis.find( "name", "banban" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'lol'){
      message.delete();
    const emoji = bot.emojis.find( "name", "lol" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'あっ'){
    const emoji = bot.emojis.find( "name", "JyoJyo" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'bot'){
    const emoji = bot.emojis.find( "name", "bot" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'せやな'){
      message.delete();
    const emoji = bot.emojis.find( "name", "eyana" );
    message.channel.send( emoji.toString() );
  }

    if (message.content == 'くさ'){
    const emoji = bot.emojis.find( "name", "kusahaeru" );
    message.channel.send( emoji.toString() );
  }


  if(message.content.indexOf(config.prefix) !== 0) return;
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  if(command === "ping") {
message.channel.send(` Ping を確認しています...`)
        .then((pingcheck) => pingcheck.edit(`botの速度|${pingcheck.createdTimestamp - message.createdTimestamp} ms\nAPIの速度|${Math.round(bot.ping)}ms`))
  }//ping

  if(command === "binfo") {
      message.channel.send(
          {embed: {
            author: {
              name: "Rbot",
              icon_url: "https://lh3.googleusercontent.com/MmS5-aDxBra2F0J0jU0lhJHVdcsbvjRk-RoYdhKiH8_UBdGnTP1w9g5J_82USceRWziau5d76pezhcBuSFIWh_eafmH8H4MBNQMnIvgthCfIwnHEyww=w673"
            },
            title: "Rbotの説明です",
            color: 3066993,
            timestamp: new Date(),
              thumbnail: {
              url: message.guild.iconURL
              },
              footer: {
              icon_url: bot.user.avatarURL,
              text: "©️ろんげ･|9 Ø /V (?, €#6269|Rbot"
            },
            fields: [
              {
                name: "作成者",
                value: "ろんげ･|9 Ø /V (?, €#6269"
              },
              {
                name: "使用言語",
                value: "javascript"
              },
              {
                name: "コマンドプレフィックス",
                value: "「r!」"
              },
              {
                name: "参加サーバー数",
                value: `${bot.guilds.size}`
              },
              {
                name: "その他",
                value: "`rbot-global`というチャンネルを作るとグローバルチャットが作れます。\n`rbot-info`というチャンネルを作るとこのbotのお知らせが届くようになります",
                inline: true,
              },
              {
                name: "公式サーバー",
                value: "https://discord.gg/tjkh2FM"
              },
              {
                name: "botの招待コード",
                value: "https://discordapp.com/api/oauth2/authorize?client_id=650973245792714762&permissions=8&scope=bot",
                inline: true
              },
              {
                name: "Rbot-subの招待コード",
                value: "null"
              },
            ]
          }}
        );
  }//bot説明

  if(command === "bs") {
    message.channel.send(
        {embed: {
          author: {
            name: "Rbot",
            icon_url: "https://lh3.googleusercontent.com/MmS5-aDxBra2F0J0jU0lhJHVdcsbvjRk-RoYdhKiH8_UBdGnTP1w9g5J_82USceRWziau5d76pezhcBuSFIWh_eafmH8H4MBNQMnIvgthCfIwnHEyww=w673"
          },
          title: "Rbotを作るうえで参考にしたサイト、動画です",
          color: 3066993,
          timestamp: new Date(),
          footer: {
            icon_url: bot.user.avatarURL,
            text: "©️ろんげ･|9 Ø /V (?, €#6269|Rbot"
          },
          fields: [
            {
              name: "botの基礎",
              value: "https://www.youtube.com/watch?v=9CDPw1lCkJ8",
            },
            {
              name: "グロチャ",
              value: "https://qiita.com/Yopon/items/05b65f445a48d3759c50"
            },
          ]
        }}
      );
}//bot

  if(command === "help") {
      message.channel.send(
          {embed: {
            author: {
              name: "コマンド説明",
            },
            thumbnail: {
            url: message.guild.iconURL
            },
            title: "コマンドの説明です",
            color: 3066993,
            timestamp: new Date(),
            footer: {
              text: "©️ろんげ･|9 Ø /V (?, €#6269|Rbot"
            },
            fields: [
              {
                name: "コマンドプレフィックス",
                value: "r!"
              },
              {
                name: "ping",
                value: "botの反応速度を表示します"
              },
              {
                name: "binfo",
                value: "botの情報を表示します"
              },
              {
                  name: "help",
                  value: "これを表示します"
              },
              {
                name: "sinfo",
                value: "サーバーの情報を表示します(情報量少)"
              },
              {
                name: "my",
                value: "自分の情報を表示します"
              },
              {
                name: "say",
                value: "言ったことの繰り返してくれます"
              },
              {
                name: "sjoin",
                value: "このbotが入っているサーバーを表示します"
              },
              {
	            	name: 'addrole 名前 色',
	            	value:"役職をなまえと色を指定して作成できます。\nこのコマンドはサーバーの管理者しか実行できません\n色は10進数です。"
	            },
              {
                name: "rolelist",
                value: "サーバーのロールのリストを表示します"
              },
              {
                name:"embed タイトル 内容 色",
                value:"埋め込みを作成します\n色は10進数です。"
              },
              {
                name:"teian 文章",
                value:"このコマンドを実行すると開発者に提案が届きます"
              },
              {
		name:"dice 範囲(数字)",
		value:"範囲を指定して乱数を表示させます"
	      },
            ]
          }}
        );
  }//コマンド説明

  if (command === "sinfo") {
	message.channel.send(
                {embed:{
          title:'ここのサーバー名',
           color: 3066993,
          description: (message.guild.name),
          fields: [{
            name: "サーバー人数",
            value: `${message.guild.memberCount}` },
            {
              name: "サーバー制作日" ,
              value: `${message.guild.createdAt}`
            },
            {
              name: "サーバー所有者",
              value: `${message.guild.owner}`
            },
            {
              name: "国",
              value: `${message.guild.region}`
            }

          ]
        }
      }
  );
  }

  if (command === "my") {
	message.channel.send(
            {embed:{
          title:'あなたのユーザ名',
           color: 3066993,
          description: (message.author.tag),
          fields: [{
                      name: "あなたのid",
                     value: `${message.author.id}`
                   },
                   {
                     name:"アカウントが作成された時間",
                     value:`${message.author.createdAt}`
                   },
                   {
                     name:"Botかどうか",
                     value:`${message.author.bot}`
                   },
                   {
                     name:"プレイしているソフト",
                     value:`${message.author.game}`
                   },
                   {
                     name:"アイコンURL",
                     value:`${message.author.avatarURL}`
                   }
          ]
        }
      }
    )
}

  if(command === "say") {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{});
  message.channel.send(sayMessage);
  }

  if(command === "sjoin") {
    message.channel.send(
        {embed:{
          title:'bot導入サーバー',
           color: 3066993,
          description: (bot.guilds.map(g => g.name).join("\n")),
          fields: [{
            name: "導入サーバー数",
            value: `${bot.guilds.size}サーバー` },
          ]
        }
      }
      );

  }

if (command === "info"){
    if(message.author.id == '502816456052834314'){
const infoMessage = args.join(" ");
const infoch_name = "rbot-info";
bot.channels.forEach(channel => {
if (channel.name === "rbot-info"){
channel.send({embed:{
  title:'Rbotインフォ',
  color: 3066993,
  timestamp: new Date(),
  thumbnail: {
    url: message.guild.iconURL
  },
  description: (infoMessage),
}});
}
});
}else{message.channel.send('あなたはこのコマンドを実行できません！')}
  }

let messageArray = message.content.split(' ');
let cmd = messageArray[0];
let agre = messageArray.slice(1);

if(command === 'addrole'){
  const perms = message.member.permissions;
    if (perms.has("ADMINISTRATOR")) {
  message.guild.createRole({
    'name': agre[0],
    'color': agre[1]
  })
  message.channel.send(
    {embed:{
      title:'役職を作成しました!',
    }
    }
  )
  }else{message.channel.send('管理者以外は実行できません')}
}


    if (command === "rolelist") {
    message.channel.send({
      embed: {
        color: 3066993,
        timestamp: new Date(),
        thumbnail: {
          url: message.guild.iconURL
        },
        title: "役職一覧",
        description: message.guild.roles.map(role => role.name).join("\n"),
        fields: [
          {
            name: "ロールの数",
            value: `${message.guild.roles.size}`
          }
        ]
      }
    });
  }

  if(command === "cinfo"){
    message.channel.send({
      embed:{
        color: 3066993,
        timestamp: new Date(),
        thumbnail :{
          url: message.guild.iconURL
        },
        title: "このチャンネルの情報",
        fields:[
          {
            name: "チャンネル名",
            value: `${message.channel.name}`
          },
          {
            name:"チャンネルID",
            value: `${message.channel.id}`
          },
          {
            name: "チャンネルの種類",
            value: `${message.channel.type}`
          },
          {
            name: "チャンネルが作成された時間",
            value: `${message.channel.createdAt}`
          }
        ]
      }
    });
  }


if (command === 'ques'){
  bot.channels.forEach(channel => {
  if (channel.name === "質問作成テスト"){
    const question = args.join(" ");
    message.guild.createChannel(message.member.displayName, { type: 'text' })
    .then((channel) => {
      bot.setParent('628130391315841037')
     message.channel.send({
            embed:{
              title: `${message.member.displayName}からの質問です！`,
              color: 3066993,
              timestamp: new Date(),
              thumbnail:{
                url:message.member.iconURL
              },
              fields: [
                {
                name: `質問内容`,
                value: question
                },
              ]
            }
          });
        });

  }
  });
  }

  if(command === 'addch'){
      const perms = message.member.permissions;
        if (perms.has("ADMINISTRATOR")) {
      const addch_name = args.join(" ");
      message.delete().catch(O_o=>{});
      message.guild.createChannel(addch_name, 'text')
             .then( (ch) => {
        message.channel.send({
          embed:{
            title:"チャンネルを作成しました",
            color:3066993,
            timestamp:new Date(),
            thumbneil:{
              url:message.guild.iconURL
            },
            fields:[
              {
                name:"チャンネル名",
                value:addch_name
              }
            ]
          }
        })
          ch.send({
            embed:{
              color:3066993,
              timestamp:new Date(),
              thubneil:{
                url:message.guild.iconURL
              },
              fields:[
                {
                  name:"チャンネル作成者",
                  value:message.member.displayName + 'が作成しました',
                }
              ]
            }
          });
        })
             .catch( (err) => {message.chanel.send({
        embed:{
          title:"チャンネルの作成に失敗しました",
          color: 3066993,
          titmestamp: new Date(),
          thumbnail: {
            url:message.guid.iconURL
          }
        }
      })});
  }
  }


  if(command === 'embed'){
    const emtitle = args[0]
    const emcontent = args[1]
    const emcolor = args[2]
    message.delete();
    message.channel.send({
      embed:{
        title:emtitle,
        color:emcolor,
        timestamp:new Date(),
        description:emcontent,
        footer:{
      icon_url: message.author.avatarURL,
          text:`${message.member.displayName}`,
        }
      }
    })
  }

  if (command === "teian"){
  const teianMessage = args.join(" ");
  bot.channels.forEach(channel => {
  if (channel.id === "655729271607787522"){
  channel.send({embed:{
  title:"提案が届きました！",
  color: 3066993,
  timestamp: new Date(),
  thumbnail: {
    url: message.guild.iconURL
  },
  fields:[
    {
      name:"提案者",
      value:message.author.tag
    },
    {
      name:"id",
      value:message.author.id
    },
    {
      name:"鯖名",
      value:message.guild.name
    },
    {
      name:"id",
      value:message.guild.id
    },
    {
      name:"提案内容",
      value:teianMessage
    }
  ]
}});
}
}
);
message.channel.send("提案内容が送信されました！")
}
	
    if(command === "dice"){
    const dicerange = args[0]
  const dice = Math.floor(Math.random() * dicerange);
    message.channel.send(dice + "が出ました！");
  }

	if(command === "url"){
  message.channel.send({
    embed:{
      title:"urlまとめ",
      color:Math.floor(Math.random()* 100000),
      footer:{
        text:"©ろんげ･|9 Ø /V (?, €#6269"
      },
      fields:[
        {
          name:"Rbotの招待URL",
          value:"https://discordapp.com/api/oauth2/authorize?client_id=650973245792714762&permissions=8&scope=bot",
          inline: true
        },
        {
          name:"Rbot-subの招待URL",
          value:"https://discordapp.com/api/oauth2/authorize?client_id=634020309464383488&permissions=8&scope=bot",
          inline: true
        },
        {
          name:"bot公式サーバー",
          value:"https://discord.gg/tjkh2FM",
          inline: true
        },
        {
          name:"Rbot公式ホームページ",
          value:"https://sites.google.com/view/discord-rbot/%E3%83%9B%E3%83%BC%E3%83%A0",
          inline: true
        }
      ]
    }
  });
}

  if(command === 'setgame'){
    if(message.author.id !== '502816456052834314', '549881392499130369'){
    const game = args[0]
    bot.user.setPresence({game: { name: game} } );
    }else message.channel.send("あなたは開発者ではありません")
    .then(log)
  }

const author = message.author.tag
  const log =bot.channels.filter(ch => ch.name === 'rbot-log-0716').forEach(ch =>
ch.send({
embed:{
title:"コマンド実行log",
  color:3066993,
description:"`[実行者]:"+author+" | Id:"+message.author.id+"\n[鯖名]:"+message.guild.name+"| id:"+message.guild.id+"\n[使用コマンド]:"+command+"`",
}}))

})

bot.on('message', message =>
{
  if (message.channel.name === 'rbot-global')
  {
      if (message.author.bot) return;
      if (message.attachments.size <= 0)
      {
          message.delete()
      }
      bot.channels.forEach(channel =>
      {
          if (message.attachments.size <= 0)
          {
              const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.tag, message.author.avatarURL)
                  .setDescription(message.content)
                  .setColor(0x2C2F33)
                  .setFooter(message.guild.name, message.guild.iconURL)
                  .setTimestamp()
              if (channel.name === 'rbot-global')
              {
                  channel.send(embed)
                  return;
              }
              return;
          }
          if (!message.attachments.forEach(attachment =>
          {
              const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.tag, message.author.avatarURL)
                  .setImage(attachment.url)
                  .setDescription(attachment.url)
                  .setColor(3066993)
                  .setFooter(message.guild.name, message.guild.iconURL)
                  .setTimestamp()
              if (channel.name === 'rbot-global')
              {
                  channel.send(embed)
                  return;
              }
              return;
          }));
          return;
      });
  }
})//グローバルチャット



bot.on('message', async message => {
  const { inspect } = require('util');
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'eval') {
    // Put your userID here
    if (message.author.id !== '502816456052834314', '502816456052834314') {

    let evaled;
    try {
      evaled = await eval(args.join(' '));
      message.channel.send(inspect(evaled));
      console.log(inspect(evaled));
    }
    catch (error) {
      console.error(error);
      message.channel.send(error.message);
    }
  }else message.channel.send("あなたは開発者ではありません")
  }
});//evalコマンド

bot.on('message', async (msg) => {
  const re = new RegExp('https://discordapp.com/channels/([0-9]{18})/([0-9]{18})/([0-9]{18})')
  const results = msg.content.match(re)
  if (!results) {
      return
  }
  const guild_id = results[1]
  const channel_id = results[2]
  const message_id = results[3]

  const channel = bot.channels.get(channel_id);
  if (!channel){
    return;
  }
  channel.fetchMessage(message_id)
    .then(msg => msg.channel.send({
      embed:{
        timestamp: new Date(),
        author:{
          name:msg.author.tag,
          icon_url:msg.author.iconURL
        },
        footer:{
          text:msg.channel.name,
        },
        description:msg.content
      }
    }))
    .catch(console.error);
});//url展開



bot.on('ready', message =>
{

bot.user.setPresence({ game: { name: "r!helpでヘルプを表示!"} });
	console.log('起動');
      const ch_name = "rbot起動ログ";

bot.channels.forEach(channel => {
  console.log('bot is ready!');
       if (channel.name === ch_name) {
          channel.send(
  {embed: {
    color: 753684,
    description: 'Rbotが起動しました！'
  }}
);
            return;
        }
        return;
    });
});


bot.login(config.Token);
