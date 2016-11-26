# google-chrome-extension-test

Hello,

I'm [Liviu Balan](http://www.liviubalan.com/) and here is the source code for my first
[Google Chrome](https://www.google.com/chrome/) [extension](https://chrome.google.com/webstore/category/extensions) named
[google-chrome-extension-test](https://github.com/liviubalan/google-chrome-extension-test). On this repository I'm experimenting with
the [Google Chrome Manifest File Format](https://developer.chrome.com/extensions/manifest),
[Google Chrome JavaScript APIs](https://developer.chrome.com/extensions/api_index) and the Google Chrome development
flow: from creation and installation to publishing the extension.

## Requirements

In order to run this project on your machine you have to install the following packages:

* [Git](https://git-scm.com/). Checkout
[Git install on Ubuntu Server](http://www.liviubalan.com/git-install-on-ubuntu-server) for more details.
* [Google Chrome](https://www.google.com/chrome/). Checkout
[Google Chrome on Wikipedia](https://en.wikipedia.org/wiki/Google_Chrome) for more details.

## Installation

After the Requirements section is checked, open a [console](https://en.wikipedia.org/wiki/Command-line_interface) and
follow this steps:

1. Clone the GitHub project repository:

 ```bash
 git clone git@github.com:liviubalan/liviubalan.com-vagrant-ubuntu.git
 ```

2. Change the current directory to `liviubalan.com-vagrant-ubuntu`:

 ```bash
 cd liviubalan.com-vagrant-ubuntu/
 ```

3. Create and configure the VirtualBox guest machine (more info on
[Vagrant Install ubuntu-precise32 and ubuntu-trusty32 on Linux Mint/Ubuntu Desktop](http://www.liviubalan.com/vagrant-install-ubuntu-precise32-and-ubuntu-trusty32-on-linux-mintubuntu-desktop)):

 ```bash
 vagrant up --provider virtualbox
 ```

4. Edit your operating system [hosts file](https://en.wikipedia.org/wiki/Hosts_%28file%29) (more info on
[Ubuntu Linux hosts file](http://www.liviubalan.com/ubuntu-linux-hosts-file)):

 ```bash
 192.168.56.101 http.liviubalan.com www.http.liviubalan.com
 192.168.56.101 wp.liviubalan.com
 ```

5. Connect to the virtual machine using:

 ```bash
 vagrant ssh
 ```

 You can also connect through SSH using other users witch are created by the provision shell scripts. For example,
 you can use:
 
 ```bash
  ssh liviu@http.liviubalan.com
  ```
  More info about the user credentials you can find inside of
  [provision-shell/resources/var.sh](https://github.com/liviubalan/liviubalan.com-vagrant-ubuntu/blob/master/provision-shell/resources/var.sh).
  If you want to learn more about SSH key-based authentication, SSH client configuration and more, you can checkout this
  [SSH tutorials](http://www.liviubalan.com/tag/ssh).

## Configuration

Most the configuration settings that you want to modify are placed on
[Vagrantfile](https://github.com/liviubalan/liviubalan.com-vagrant-ubuntu/blob/master/Vagrantfile) and
[provision-shell/resources/var.sh](https://github.com/liviubalan/liviubalan.com-vagrant-ubuntu/blob/master/provision-shell/resources/var.sh)
files.

You have a lot of configuration options inside of `provision-shell/resources/var.sh` but the usual values that you
want to change are:

* **LIV_TUT_NO_START**: Tutorial start step from which the provision will begin.
* **LIV_TUT_NO_STOP**: Maximum tutorial step until the provision will be made.
* **LIV_TUT_NO_BEGIN**: Run the begin (init) provision shell script.
* **LIV_TUT_NO_END**: Run the end (cleanup) provision shell script.
* **LIV_TUT_NO_BEGIN_APT_UPDATE**: Downloads the package lists from the repositories and "updates" them to get
information on the newest versions of packages and their dependencies.
* **LIV_TUT_NO_BEGIN_SHR_CLEAN**: Remove all the files inside the shared directory.
* **LIV_TUT_SH_END_LAST**: Run tutorial end provision shell script for the last tutorial.

For more info about all the `provision-shell/resources/var.sh` configuration options check the comments within the
file.

In order to change the values for `Vagrantfile` check the
[Vagrantfile documentation](https://www.vagrantup.com/docs/vagrantfile/).

## Debugging

If you experience problems when using `vagrant up --provider virtualbox` you can change the following values inside
of your [Vagrantfile](https://github.com/liviubalan/liviubalan.com-vagrant-ubuntu/blob/master/Vagrantfile):
* **vb.gui**: Display the VirtualBox GUI when booting the machine.
* **vb.customize ["modifyvm", :id, "--nictype1", "Am79C973"]** and
**vb.customize ["modifyvm", :id, "--nictype1", "Am79C973"]**: If you experience network problems you can uncomment
this lines.
* **config.vm.boot_timeout**: The time in seconds that Vagrant will wait for the machine to boot and be accessible.

Thank you for cloning!  
Bye bye!
