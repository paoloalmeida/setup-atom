# Iris UI

An Atom theme that goes well with the Iris GTK theme.
Based on [Seti UI](https://github.com/jesseweed/seti-ui).

## Recommended themes

-	[Iris GTK theme](https://github.com/xyl0n/iris/)
-	[Iris Gnome Shell theme](https://github.com/phaux/iris-shell)
-	[Ozon icon theme](https://github.com/ozonos/ozon-icon-theme)
-	[Pink as hell wallpaper](https://imgur.com/iU5zzx3)

## Screenshot

![Screenshot](https://github.com/phaux/iris-shell/raw/master/screenshot.png)

## Installing

Easiest way to install all this stuff and keep it updated is via git.
Here's how I do it:

1.	Clone everything into a globally readable directory like `/opt/gitstuff`

	````bash
	sudo mkdir /opt/gitstuff
	cd /opt/gitstuff
	sudo git clone https://github.com/xyl0n/iris.git
	sudo git clone https://github.com/phaux/iris-shell.git
	sudo git clone https://github.com/ozonos/ozon-icon-theme.git
	````

2.	Symlink

	````bash
	sudo ln -sT /opt/gitstuff/iris /usr/share/themes/Iris
	sudo ln -sT /opt/gitstuff/iris-shell /usr/share/themes/Iris-Shell
	sudo ln -sT /opt/gitstuff/ozon-icon-theme/Ozon /usr/share/icons/Ozon
	````

3.	Select the themes with the Tweak Tool and you're done!

4.	Later you can use this script to update everything:

	````bash
	#!/bin/bash
	for repo in /opt/gitstuff/*
	do
		cd $repo
		git pull
	done
	````

These scripts were tested on Fedora 21 x86_64
