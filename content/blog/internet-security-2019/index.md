---
author: Kien
date: 2019-08-21
slug: internet-security-2019
title: Importance of Online Security
description: "Why I carry a U2F key with me and use a password manager."
tags: ["technology"]
---

![](https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3149&q=80)
My Blizzard account was recently hacked and I was completely baffled. Not only was my account hacked, it was straight up stolen. I had 6 emails with codes being generated for a notified login while I was asleep and somehow they were able to generate the correct 2FA code, log in to my Blizzard account and change my email, making the "forgot password prompt" useless. It felt like someone broke into my home, took a steamy shit on my floor and stole my rug.

I admit, I’m guilty of using the same passwords to everything <b style="color: #FF5370">except</b> for my Gmail and banking, but the fact that they were able to generate a Blizzard 2FA code from my email is quite a shock. I was either completely hacked via my Gmail account or they were able to spoof the 2FA code externally. What bothers me is that I have 2FA on my Gmail account and I was never notified of an unauthorized login. I digress.

I’ve made significant steps on improving my security the past few days, including a complete change of all my passwords for all types of accounts and researching how to make my passwords more secure even with 2FA. This included:

1.  <b style="color: #FF5370">Buying a U2F Key</b> - Yubico’s <a href="https://www.amazon.ca/Yubico-YubiKey-NFC-Authentication-USB/dp/B07HBD71HL/ref=sr_1_3?keywords=yubico&qid=1566436767&s=gateway&sr=8-3" target="_blank">Yubikey 5</a> & <a href="https://www.amazon.ca/Yubico-Security-USB-Factor-Authentication/dp/B07M8YBWQZ/ref=sr_1_4?keywords=yubico&qid=1566436812&s=gateway&sr=8-4" target="_blank">NFC Security Key (Back-up)</a>

2.  <b style="color: #FF5370">Switching to a password manager</b> - <a href="https://bitwarden.com/" target="_blank">Bitwarden </a>

After this incident, I’ve learned a lot about streamlining my passwords, U2F keys and informing myself on how to become more secure online. I’ve also gone ahead and learned how to encrypt sensitive files on my computer and my portable USB drives using <a href="https://www.veracrypt.fr/en/Home.html" target="_blank">VeraCrypt</a> which is an open source utility to encrypt data.

#<center>Universal 2nd Factor (U2F)

<a href="https://www.yubico.com/solutions/fido-u2f/" target="_blank">U2F (Universal 2nd Factor)</a> is an open authentication standard that enables users to strengthen and simplify 2FA (two-factor authentication) using a USB key or an NFC device. Basically, it’s a physical USB key that relies on public key cryptography which helps protect against phishing, hijacking and malware attacks.

There are many ways a 2FA is implemented, usually, when you enter a password, you are prompted to answer a personal question or provide a one time passcode (OTP) from an SMS text or from an authenticator app. These provide a good additional layer of protection, however, they are vulnerable to man-in-the-middle attacks. A U2F key aims to solve this issue.

###<center>How the Yubico Key Works

When you log in to a service that supports U2F, a prompt will ask you to insert the USB key and requires a physical touch to activate it to ensure that a human is trying to log in and not a computer. During this process, the key does its magic and makes sure that the website is the real deal, otherwise, it will reject the log in. You can learn more <a href="https://www.yubico.com/getstarted/meet-the-yubikey/" target="_blank">here.</a>

Luckily, there are many companies that support U2F, including Facebook, Google, Microsoft, Dropbox and Github. I ended up buying the Yubikey 5 as my main key and have an Yubico NFC Security Key as a back up which is generally recommended. I found a lot of information from this <a href="https://www.youtube.com/watch?v=MHTIVR1mY7k&" target="_blank">video.</a>

Google said they’ve completely <a href="https://www.extremetech.com/computing/274067-google-eliminated-phishing-by-giving-all-85000-employees-usb-security-keys" target="_blank"> eliminated phishing attacks for 85,000 employees</a> by adopting these U2F keys. Although I’m not a high profile person who is subjected to attacks, I’d like to have a peace of mind when it comes to online security.

##<center>Bitwarden

I’ve used Last Pass and DashLane previously, but I’ve never liked their freemium models as they seem very intrusive in collecting your data. After doing a bit more digging, I found a service called <a href="https://bitwarden.com/" target="_blank">Bitwarden</a>, a free and open source software that can be audited by anyone ensuring there is no fancy stuff happening.

When compared to the other services, I found Bitwarden really intuitive, the syncing to multiple devices is free unlike other password managers like 1Password. It’s a basic password manager that does what Google Chrome does, however, it provides a much nicer and intuitive UI with a lot more features. You can log in to websites using a shortcut (Ctrl+Shift+L) and many more. Premium allows you to secure this vault with a U2F key.

I remember seeing a comic from xkcd regarding passwords and have always used this method, but now with Bitwarden, random ones like these can be generated and I no longer re-use the same one or need to remember any of them.

![](https://imgs.xkcd.com/comics/password_strength.png)

Thanks to whoever hacked my account. It gave me a real wake up call securing my online accounts. I also retrieved my account back thanks to Blizzard support.
