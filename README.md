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
 git clone git@github.com:liviubalan/google-chrome-extension-test.git
 ```

2. Optionally change the current directory to `google-chrome-extension-test` in order to modify the source code of the
extension:

 ```bash
 cd google-chrome-extension-test/
 ```

3. Open [Google Chrome](https://www.google.com/chrome/) from your local operating system and click **Customize and
control Google Chrome** (top right button) / **More tools** / **Extensions** or simply open a new Google Chrome tab and
type:

 ```bash
 chrome://extensions/
 ```

4. Check **Developer mode** and click on **Load unpacked extension...** and choose to open the content of
**google-chrome-extension-test** from step 1 above.

5. Ensure that the extension is enabled by checking the **Enabled** option for **GoogleChromeExtensionTest** extension.

## Configuration

Most the configuration settings that you want to modify are placed on
[manifest.json](https://github.com/liviubalan/google-chrome-extension-test/blob/master/manifest.json) and
[_locales/en/messages.json](https://github.com/liviubalan/google-chrome-extension-test/blob/master/_locales/en/messages.json)
files. Also some other resources such as [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and
[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) are used so check them out.

## Debugging

Based on the current step of the extension development you can use the following Google Chrome builtin tools:
* **Inspect**: **Right click** on the current section (toolbar icon, page, etc) and choose **Inspect**.
* **Extension options** from **chrome://extensions/** for the current extension: Reload button.

Thank you for cloning!  
Bye bye!
