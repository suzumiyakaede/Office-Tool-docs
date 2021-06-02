# Create Office ISO

Creating Office ISO files allows you to share Office with others, or use it for multiple installations.

For a better experience, please make sure you always download the latest `with runtime` version of Office Tool Plus. Sometimes we update the Runtime folder and the RunMe.bat file, these files need to be re-downloaded manually.

We recommend that you update your Office ISO once a month, in line with the Office update frequency.

::: tip Tip
Using the `with runtime` version of Office Tool Plus allows you to run without the .NET Desktop Runtime installed, and also allows you to set parameters, which is very helpful for multiple installations.
:::

## Download Office installation

On deploy page, change deployment mode to `Download`.

Add products as you want, such as Office Pro Plus 2021 - Volume.

Add languages as you want, if not, you need to connected to Internet when installing Office.

Change other settings if needed.

::: tip Tip
如果你需要为其他版本的 Windows 下载 Office，例如在 Windows 10 中下载 Office 安装给 Windows 7 使用，请更改 *下载设置 - UA* 为对应系统版本，反之亦然。
:::

Click "start deploy" to download Office.

## Create Office ISO file

After the download is complete, make sure that the Office installation information is loaded in the "Installation files manage" without errors.

Change deployment mode to `create ISO file`, and choose a way to do:

::: details Create Office ISO with default configuration.
Maintain your deploy settings. Click "start deploy", select the save location and file name for ISO file.

Office Tool Plus automatically detect the installation path, you do not need to clear or change the source path property.
:::

::: details Create Office ISO without default configuration.
Press F5 to clear all configuration, or clear all products and languages manually.

Click "start deploy", select the save location and file name for ISO file.
:::

::: details Create an automatically installation of Office ISO

``` txt
Note that the following features are not available in this mode：
- Create desktop shortcuts.
- Install iSlide after installation.
- Sign out, shut down or restart after deployment.
- Use Office Tool Plus as installation module.

If you need the above, please choose another way to create Office ISO file.
```

Maintain your deploy settings.

Edit RunMe.bat, change the line 22:

``` batch
start "" "Office Tool Plus.exe" /loadConfig "%~dp0ConfigForISO.xml" /SourcePath "%~dp0"
```

Save RunMe.bat, back to Office Tool Plus, click "start deploy", select the save location and file name for ISO file.

After creating ISO file, change RunMe.bat back or you won't be able to open Office Tool Plus again.

``` batch
start "" "Office Tool Plus.exe"
```

:::

Anyway, it's suggested to test the ISO file by yourself.
