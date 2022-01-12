---
author: Kien
date: 2022-01-11
slug: node-pi-boot
title: 🤖 Run node app on boot on a Rasberry Pi 4
description: How to run a node application on Rasberry Pi 4 boot up.
tags: ["productivity"]
---

This one is very similar to the [Python](/107-python-bot-reboot/) one I wrote about but I had a bit of difficulty finding the right solution that worked for me. I just wanted to use the `systemd` thats built in and not have to download another node plugin or use cron job to make this work.

The reason why I wanted to do something like this is because my Apex Disord BOT, a program made to check the current map rotation at a glance on my Discord server would turn off if the Rasberry Pi had experienced a power outage and I had to turn it back on and run `node bot.js`

So, I wanted to automated this process using the same method as the Telegram Bot I used seen in the earlier link.

At first, I tried to specify the node `ExecStart` to be `/usr/local/bin/node /home/pi/bot.js` this did not work for me, so I added the `WorkingDirectory` to point exactly where my bot was and changed my `ExecStart` to simply be `node bot.js`

The final code that worked for me was:

```bash
[Unit]
Description=Apex Discord BOT

[Service]
User=pi
WorkingDirectory=/home/Github-Projects/ApexDiscordBOT
ExecStart=node bot.js
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target

```

Now I can run any persist any node application in case it ever goes down and will reboot automatically on my Rasberry Pi.
