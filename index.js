const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const { Client, Attachment } = require('discord.js');
const fs = require('fs');
const Canvas = require('canvas');

const now = new Date();
const year = now.getFullYear();
const mon = now.getMonth() + 1;
const day = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();

const hour_jp = hour - 3;

const version = "1.0";


  let ronge
  let ronge2
  let Rbot
  let Rbot2
  let Rbot_sub
  let Rbot_sub2

  bot.on('message', message =>{
           bot.users.forEach(user => {
    if(user.id === "502816456052834314"){
      ronge = user.presence.status;
      if(user.presence.status === "online"　|| user.presence.status === "idle"){
        ronge2 =  ":green_circle:"
      }else {ronge2 =  ":red_circle:" }
    }
  })//ronge

    bot.users.forEach(user => {
    if(user.id === "650973245792714762"){
      Rbot = user.presence.status;
      if(user.presence.status === "online"){
        Rbot2 =  ":green_circle:"
      }else {Rbot2 =  ":red_circle:" }
    }
  })//Rbot

    bot.users.forEach(user => {
    if(user.id === "634020309464383488"){
      Rbot_sub = user.presence.status;
      if(user.presence.status === "online"){
        Rbot_sub2 =  ":green_circle:"
      }else {Rbot_sub2 =  ":red_circle:" }
    }
  })//Rbot_sub

  bot.channels.forEach(channel => {
    if(channel.id === "693322854107709481"){
      channel.fetchMessage("693323017828433970")
      .then(msg => {

        const online_panel = {
          title:"Rbot関連アカウントのオンライン状況 :thinking:",
          fields:[
            {
              name:"[制作者]ろんげ･|9 Ø /V (?, €",
              value:ronge + " " + ronge2
            },
            {
              name:"[Bot]Rbot",
              value:Rbot + " " + Rbot2
            },
            {
              name:"[サブBot]Rbot-sub",
              value:Rbot_sub + " " + Rbot_sub2
            }
          ]
        }

        msg.edit({embed:online_panel})


      })
    }
  })


      bot.users.forEach(user => {
    if(user.id === "502816456052834314"){
      ronge = user.presence.status;
      if(user.presence.status === "online"　|| user.presence.status === "idle"){
        ronge2 =  ":green_circle:"
      }else {ronge2 =  ":red_circle:" }
    }
  })//ronge

    bot.users.forEach(user => {
    if(user.id === "650973245792714762"){
      Rbot = user.presence.status;
      if(user.presence.status === "online"){
        Rbot2 =  ":green_circle:"
      }else {Rbot2 =  ":red_circle:" }
    }
  })//Rbot

    bot.users.forEach(user => {
    if(user.id === "634020309464383488"){
      Rbot_sub = user.presence.status;
      if(user.presence.status === "online"){
        Rbot_sub2 =  ":green_circle:" 
      }else {Rbot_sub2 =  ":red_circle:" }
    }
  })//Rbot_sub

  bot.channels.forEach(channel => {
    if(channel.id === "693322854107709481"){
      channel.fetchMessage("693323017828433970")
      .then(msg => {

        const online_panel = {
          title:"Rbot関連アカウントのオンライン状況 :thinking:",
          fields:[
            {
              name:"[制作者]ろんげ･|9 Ø /V (?, €",
              value:ronge + " " + ronge2
            },
            {
              name:"[Bot]Rbot",
              value:Rbot + " " + Rbot2
            },
            {
              name:"[サブBot]Rbot-sub",
              value:Rbot_sub + " " + Rbot_sub2
            }
          ]
        }


        msg.edit({embed:online_panel})


      })
    }
  })


    })

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

//ch用json定義
"use strict"
 
// JSONファイル出力関数
const write_json = ( filename, obj ) =>
{
  fs.writeFile( filename, JSON.stringify( obj, null, '\t' ), (e) => {
    if ( e ) {
      console.log( e );
      throw e;
    }
  });
}

const ch_log_filename = 'ch_log.json';

let ch_log ={};

try {
  const str = fs.readFileSync( ch_log_filename, 'utf8' );
  ch_log = JSON.parse( str );
}
catch ( err ) {
  ch_log.channels = new Array();
}
//ch用json定義

bot.on('message', (message) => {

  if (message.author.bot) return;
  if(message.isMemberMentioned(bot.user))
  {
      message.reply( 'んあ？' );
      return;
  }

  if(message.content.startsWith("おやすみ")) {
      message.channel.sendMessage('お疲れ様でした!どうぞゆっくり疲れをいやしてください！')
  }//おやすみ

  if(message.content.startsWith("おはよ")) {
      message.channel.sendMessage('おはようございます！朝ごはんはちゃんと食べてね！')
  }//おはよう

      if(message.content == '暇') {
      message.channel.sendMessage('平和ですねぇ…。')
  }
	      if(message.content == 'こんにち') {
      message.channel.sendMessage('こんです～')
  }

      if(message.content.startsWith("こんにちは")) {
      message.channel.sendMessage('こんにちは！')
  }

      if(message.content.startsWith("よろしくっ(*｀･ω・)ゞ'")) {
      message.channel.sendMessage('よろしく！(*｀･ω・)ゞ')
  }

      if(message.content.startsWith("こんばん")) {
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

  if(message.content.startsWith("疲れた")){
    message.channel.sendMessage('お疲れ様です')
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

    if (message.content.startsWith("ロード")){
    const emoji = bot.emojis.find( "name", "loading" );
    message.channel.send( emoji.toString() );
  }

    if (message.content.startsWith("ぴょんぴょん")){
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

    if (message.content.startsWith("くさ")){
    const emoji = bot.emojis.find( "name", "kusahaeru" );
    message.channel.send( emoji.toString() );
  }


})//文章応答

bot.on('message', message => {

    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "ping") {
  message.channel.send(` Ping を確認しています...`)
          .then((pingcheck) => pingcheck.edit(`botの速度1(タイムスタンプ式)|${pingcheck.createdTimestamp - message.createdTimestamp} ms\nBotの速度(bot.ping式)|${Math.round(bot.ping)}ms`))
    }//ping

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
                       name:"アイコンURL",
                       value:`${message.author.avatarURL}`
                     }
            ]
          }
        }
      )
  }

    if(command === "say") {
    message.delete()
    message.channel.send(args[0]);
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
      if(channel.name === "rbot-global"){
        channel.send({embed:{
          title:'Rbotインフォ',
          color: 3066993,
          timestamp: new Date(),
          thumbnail: {url: message.guild.iconURL},
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

  //質問作成系統
  if (command === 'ques'){
    bot.channels.forEach(channel => {
    if (channel.name === "質問部屋作成"){
      const question = args.join(" ");
      message.guild.createChannel(message.member.displayName, { type: 'text' })
      .then((channel) => {
        channel.setParent('673030906306494494')
        channel.send({
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

    if(command === 'close'){
    message.channel.setParent('673030925864534024')
    }

  　if(command === 'chname'){
    const chname = args[0]
    message.channel.edit({name:chname})
   }

    // if(command === 'addch'){
    //     const perms = message.member.permissions;
    //       if (perms.has("ADMINISTRATOR")) {
    //     const addch_name = args.join(" ");
    //     message.delete().catch(O_o=>{});
    //     message.guild.createChannel(addch_name, 'text')
    //            .then( (ch) => {
    //       message.channel.send({
    //         embed:{
    //           title:"チャンネルを作成しました",
    //           color:3066993,
    //           timestamp:new Date(),
    //           thumbneil:{
    //             url:message.guild.iconURL
    //           },
    //           fields:[
    //             {
    //               name:"チャンネル名",
    //               value:addch_name
    //             }
    //           ]
    //         }
    //       })
    //         ch.send({
    //           embed:{
    //             color:3066993,
    //             timestamp:new Date(),
    //             thubneil:{
    //               url:message.guild.iconURL
    //             },
    //             fields:[
    //               {
    //                 name:"チャンネル作成者",
    //                 value:message.member.displayName + 'が作成しました',
    //               }
    //             ]
    //           }
    //         });
    //       })
    //            .catch( (err) => {message.chanel.send({
    //       embed:{
    //         title:"チャンネルの作成に失敗しました",
    //         color: 3066993,
    //         titmestamp: new Date(),
    //         thumbnail: {
    //           url:message.guid.iconURL
    //         }
    //       }
    //     })});
    // }
    // }


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
          channel.send({
            embed:{
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
        }
      });
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

    if(command === "banlist"){
      message.guild.fetchBans()
    .then(banned => {
      let list = banned.map(user => user.tag + "```ID:" + user.id + "```").join('\n');

      if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;

        message.channel.send({embed:{title:`${banned.size}人がBANされています。`,description:list}})
    })
    }

    if ( command  === 'addch' ){
      const perms = message.member.permissions;
          if (perms.has("ADMINISTRATOR")) {
      const ch_name = args[0]

      if ( !message.guild.channels.exists( 'name', ch_name  ) ){

        message.guild.createChannel( ch_name, 'text' )
          .then( (ch) => {
          if(args[1]){
            let parent = message.guild.channels.find( 'name', args[1] );
            if ( parent ) {
              ch.setParent( parent );
            }
          }
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
                    name:"チャンネル",
                    value:`<#${ch.id}>`
                  }
                ]
              }
            })
            ch.send( message.member.displayName + 'が作成しました' );

            let obj = {
              ch_id: ch.id,
              user_id: message.member.id,
            }

            // チャンネルIDとユーザーIDを追加してJSONファイルに出力
            ch_log.channels.push( obj );
            write_json( ch_log_filename, ch_log );
          })
          .catch( (err) => { console.log( err ); });
      }
      else {
        message.channel.send( '同名のチャンネルが既に存在しています' );
      }
    }
  }


    if ( command === 'delch' ){
      const perms = message.member.permissions;
          if (perms.has("ADMINISTRATOR")) {
      const ch_name = args[0]

      let channel = message.guild.channels.find( 'name', ch_name );

      if ( channel ){

        const index = ch_log.channels.findIndex( (obj)=>{
          return obj.ch_id === channel.id;
        });

        // 削除しようとしているユーザーが作成者かチェック
        if ( message.member.id === ch_log.channels[index].user_id ){

          channel.delete()
            .then( (ch) => {
              // 削除したチャンネルじゃなければ削除メッセージを送信
              if ( ch.id !== message.channel.id ) {
                message.channel.send( ch_name + 'チャンネルを削除しました' );
              }

              // 削除したチャンネルのログを削除してJSONファイルに出力
              ch_log.channels.splice( index, 1 );
              write_json( ch_log_filename, ch_log );
            })
            .catch( (err) => { console.log( err ); } );
        }
        else {
          message.channel.send( ch_name + 'あなたはそのチャンネルの作成者ではありません' );
        }
      }
      else {
        message.channel.send( ch_name + 'そのチャンネルは存在しません' );
      }
    }
  }

    if(command == "avatar"){
      message.channel.send(message.author.avatarURL)
    }

    if(command === "timer"){
      const time = args[0]*1000
      const num = 0
      message.channel.send(`タイマーを${args[0]}秒にセットしました。`)

      function timer(){
        message.channel.send(`<@${message.author.id}>さん！${args[0]}秒立ちましたよ！`)
      }
      setTimeout(timer,time)
    }

    if(command === 'setgame'){
      if(message.author.id !== '502816456052834314', '549881392499130369'){
      const game = args[0]
      bot.user.setPresence({game: { name: game} } );
      }else message.channel.send("あなたは開発者ではありません")
      .then(log)
    }

    const author = message.author.tag
    const log =bot.channels.filter(ch => ch.id === '654262352400613376').forEach(ch =>
      ch.send({
        embed:{
          title:"コマンド実行log",
          color:3066993,
          description:"`[実行者]:"+author+" | Id:"+message.author.id+"\n[鯖名]:"+message.guild.name+"| id:"+message.guild.id+"\n[使用コマンド]:"+command+"\n[引数1]:"+args[0]+"\n[引数2]:"+args[1]+"\n[引数3]:"+args[2]+"\n[動作環境]:github(heroku)"+"`",
        }}))

})

bot.on('message', message =>{
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
    if(message.content.indexOf(config.prefix) !== 0) return;

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
  .then(message.console)
  }
});//evalコマンド

bot.on('message', async (message) => {
  const re = new RegExp('https://discordapp.com/channels/([0-9]{18})/([0-9]{18})/([0-9]{18})')
  const results = message.content.match(re)
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
    .then(msg => message.channel.send({
      embed:{
        author:{
          name:"メッセージ送信者：" + msg.author.tag + "\nID：" + msg.author.id,
          icon_url:msg.author.displayAvatarURL
        },
        footer:{
          text:`サーバー名：${msg.guild.name}\n ID：${msg.guild.id}\nチャンネル名：${msg.channel.name}\nID：${msg.channel.id}`,
          icon_url:msg.guild.iconURL,
        },
        description:"送信されたメッセージ：```" + msg.content + "```",
      }
    }))
    .catch(console.error);
});//url展開

bot.on('message', async message =>{
  if (message.content === 'r!join') {
    if(!message.author.id == "502816456052834314")return;
		bot.emit('guildMemberAdd', message.member);
	}
  if(message.content === "r!remove"){
    if(!message.author.id == "502816456052834314")return;
    bot.emit('guildMemberRemove',message.member);
  }

  if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  if(command == "canvas"){

    const sayMessage = args.join(" ");

  const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/98e13cdc-ea94-4b94-89f0-65b5005f0489%2F8CQvVRV.cced9193.png?v=1594436377090');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(message.author.username, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${message.author.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${sayMessage}`, canvas.width / 2.5, canvas.height / 1.5);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	message.channel.send(attachment);
  }
  
})

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

bot.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'コマンド');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/98e13cdc-ea94-4b94-89f0-65b5005f0489%2F8CQvVRV.cced9193.png?v=1594436377090');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('see you ,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`またね、, ${member}さん...`, attachment);
});

bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'コマンド');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/98e13cdc-ea94-4b94-89f0-65b5005f0489%2F8CQvVRV.cced9193.png?v=1594436377090');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(member.guild.name + `へようこそ！, ${member}!`, attachment);
});//canvas

bot.on('message', async (msg) => {
  if(msg.content !== "rs!help"){
  if (!msg.content.toLowerCase().startsWith(config.prefix) || msg.author.bot) return;
  const args = msg.content.slice(config.prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command == 'help') {
    msg.delete()
    const options = { limit: 15 * 1000, min: 1, max: 10, page: 1}


//helpのページ
    const pages = {
      1: {title:"Rbotのヘルプです",
          color:3066993,
          description:"下にあるリアクションを押してページ移動してください\nゴミ箱のリアクションを押すとこの埋め込みを消すことができます",
          footer:{
            text:"1/10"
          }
    },//ページ1
      2:{title:"目次です",
         color:3066993,
         fotter:{
           text:"2/10"
         },
         fields:[
           {
             name:"P1",
             value:"helpの使い方"
           },
           {
            name:"P2",
            value:"目次"
           },
           {
            name:"P3",
            value:"Botの情報"
           },
           {
            name:"P4",
            value:"コマンド一覧(情報系)"
           },
           {
            name:"P5",
            value:"コマンド一覧(機能系)"
           },
           {
            name:"P6",
            value:"コマンド一覧(その他)"
           },
           {
            name:"P7",
            value:"その他Botの機能"
           },
           {
            name:"P8",
            value:"リンク一覧"
           },
           {
            name:"P9",
            value:"その他"
           },
           {
            name:"P10",
            value:"参考文献(未完成)"
           },
         ]
    },//ページ2
      3:{title:"このBotの情報",
         color:3066993,
         footer:{
           text:"3/10"
         },
         fields:[
           {
             name:"Bot名",
             value:"Rbot"
           },
           {
             name:"作成者",
             value:"ろんげ･|9 Ø /V (?, €#6269"
           },
           {
             name:"使用言語",
             value:"Discord.js"
           },
           {
             name:"ファイル容量",
             value:"3.84 MB"
           },
           {
             name:"Bot作成日",
             value:"2019年12月2日08時15分16秒"
           }
         ]
    },//ページ3
      4:{title:"コマンド一覧(情報系統)",
         color:3066993,
         footer:{
           text:"4/10"
         },
         description:"コマンドプレフィックスは「r!」です",
         fields:[
           {
             name:"ping",
             value:"Botの速度をはかります"
           },
           {
             name:"help",
             value:"これを表示します"
           },
           {
            name:"sinfo",
            value:"サーバーの情報を表示します"
           },
           {
            name:"cinfo",
            value:"チャンネルの情報を表示します"
           },
           {
            name:"my",
            value:"自分の情報を表示します"
           },
           {
            name:"sjoin",
            value:"このBotが入っているサーバー一覧を表示します"
           },
           {
            name:"rolelist",
            value:"サーバーのロールの一覧を表示します"
           },
         ]
      },//ページ4
      5:{title:"コマンド一覧(機能系)",
         color:3066993,
         footer:{
           text:"5/10"
         },
         fields:[
          {
            name:"say (文章)",
            value:"(文章)を繰り返してくれます"
          },
          {
            name:"addrole (名前) (色(10進数))",
            value:"(名前)という名前のロールが作れます\nroleの権限が必要です"
          },
          {
            name:"embed (タイトル) (内容) (色(10進数))",
            value:"埋め込みを作成できます"
          },
          {
            name:"doce (範囲(数字))",
            value:"(範囲)で指定した範囲の乱数を表示します"
          },
         ]
    },//ページ5
      6:{title:"コマンド一覧(その他)",
         color:3066993,
         footer:{
           text:"6/10"
         },
         fields:[
           {
             name:"teian",
             value:"開発者に提案を送信できます。"
           },
         ]
      },//ページ6
      7:{title:"その他Botの機能",
         color:3066993,
         footer:{
           text:"7/10"
         },
         fields:[
           {
             name:"グローバルチャット",
             value:"[`rbot-global`]という名前のチャンネルを作ると、このBotの\nグローバルチャットに接続できます"
           },
           {
            name:"info",
            value:"[`rbot-info`]という名前のチャンネルを作り、Rbot-subというこのBotのサブBotを入れておくと\nこのBotのお知らせの通知を受け取ることができます"
          },
         ]
    },//ページ7
      8:{title:"リンクまとめ",
         color:3066993,
         footer:{
           text:"8/10"
         },
         description:"[Rbotの招待リンク](https://discordapp.com/api/oauth2/authorize?client_id=650973245792714762&permissions=8&scope=bot)\n\n[Rbot-subの招待リンク](https://discordapp.com/api/oauth2/authorize?client_id=634020309464383488&permissions=0&scope=bot)\n\n[このBotの公式鯖](https://discord.gg/tjkh2FM)\n\n[このbotのホームページ(作成中)](https://sites.google.com/view/discord-rbot/%E3%83%9B%E3%83%BC%E3%83%A0)\n\n[RbotのGitHub](https://github.com/ronge-0716/Rbot-js)\n\n[Rbot-subのgitHub](https://github.com/ronge-0716/Rbot-sub-js)",
    },//ページ8
      9:{title:"その他",
         color:3066993,
         footer:{
           text:"9/10"
         },
         description:"何か開発者に連絡したいととがあれば、ろんげ･|9 Ø /V (?, €#6269へDMを送るか、\n[teian]コマンドを使ってください。\n\nこのBotのGuthub通知を受け取りたいという方は、サーバーの招待リンクと、設定したいチャンネルのwebhookを送ってくだされば、設定します。"
    },//ページ9
      10:{title:"このBotを作るにあたって...",
          color:3066993,
          footer:{
            text:"10/10"
          },
          description:"ここには参考にしたwebページなどを書く予定です。\n現在履歴をあさっています..."
    },//ページ10
    }
//helpのページ

    const awaitReactions = async (msg, m, options, filter) => {
      const { min, max, page, limit } = options;
      m.awaitReactions(filter, { max: 1, time: limit, errors: ['time'] })
        .then(async (collected) => {
        const reaction = collected.first()

        if (reaction.emoji.name === '⬅') {
      await removeReaction(m, msg, '⬅');
      if (options.page != options.min) {
      options.page = options.page - 1;
      await m.edit({ embed: pages[options.page] });
      }
  awaitReactions(msg, m, options, filter);
        }

    else if (reaction.emoji.name === '➡') {
  await removeReaction(m, msg, '➡');
  if (options.page != options.max) {
      options.page = options.page + 1;
      await m.edit({ embed: pages[options.page] });
  }
  awaitReactions(msg, m, options, filter);
    }

    else if (reaction.emoji.name === '🗑') {
  return await m.delete();
    }
    else {
      awaitReactions(msg, m, options, filter);
    };



        }).catch(() => {});
}

    const m = await msg.channel.send({ embed: pages[options.page] });
    await m.react('⬅');
    await m.react('➡');
    await m.react('🗑');

    const filter = (reaction, user) => {
      return ['⬅', '➡', '🗑'].includes(reaction.emoji.name) && user.id == msg.author.id;
    };
    awaitReactions(msg, m, options, filter);
    const removeReaction = async (m, msg, emoji) => {
  try { m.reactions.find(r => r.emoji.name == emoji).users.remove(msg.author.id); } catch(err) {}
    }
  }
    }//command helpの()
});//client.onの()

bot.on('ready', message =>{

bot.user.setPresence({ game: { name: "[r!help]でヘルプを表示!" + "現在のバージョン：" + version} });
	console.log('起動');
      const ch_name = "rbot起動ログ";

bot.channels.forEach(channel => {
       if (channel.name === ch_name) {
          channel.send(
  {embed: {
    color: 753684,
    description: 'Rbotが起動しました！',
    fields:[
      {
        name:"認識しているサーバー数",
        value:bot.guilds.size
      },
      {
        name:"認識しているチャンネル数",
        value:bot.channels.size
      },
      {
        name:"認識している人数",
        value:bot.users.size
      },
    ]
  }}
);
            return;
        }
        return;
    });

});


bot.login(DISCORD_BOT_TOKEN);
