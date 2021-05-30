# 创建 Office ISO

创建 Office ISO 文件允许你与其他人分享 Office，或者用于大批量、多次安装。

为了获得更好的体验，请确保你始终从[官方网站](https://otp.landian.vip/)下载了最新的 with runtime 版本的 Office Tool Plus，有时候我们会更新 Runtime 文件夹和 RunMe.bat 文件，这些文件不会随着 Office Tool Plus 的自动升级而更新，需要手动重新下载。

我们建议您一个月更新一次 Office ISO，与 Office 更新频率保持一致，每个月的第二个星期二为 Office 固定的补丁日。

::: tip 提示
使用 with runtime 版本的 Office Tool Plus 允许你在没有安装 .NET Desktop Runtime 的情况下直接运行程序，并且还可以设置参数，这对大批量安装非常有帮助。
:::

## 下载 Office 安装文件

确保自己使用的版本无误后，双击 RunMe.bat 打开 Office Tool Plus.

在部署页面，切换部署模式为“下载”。

添加产品，按需选择，比如 Office 2021 专业增强版 - 批量版。

添加语言，按需选择，如果一个都不加，安装的时候依然需要联网。

根据需要修改体系结构和通道设置，其他设置可以按需更改。

确认所有设置无误后，点击“开始部署”。待下载完成后，继续下一步操作。

## 创建 Office ISO 文件

下载完成后，确认“安装文件管理”中能加载并正确识别 Office 安装包信息。

切换部署模式为“创建 ISO 文件”，在这三种方式中，你可以选择任意一种方式进行：

::: details 创建包含默认配置的 Office ISO
保持刚才的设置不变，点击“开始部署”，选择文件保存路径以及文件名即可。

此模式下的 Office Tool Plus 会自动适配安装文件路径，因此你无须清空或者更改源路径属性。
:::

::: details 创建不含默认配置的 Office ISO
按下 F5，或者手动清空产品和语言，点击“开始部署”，选择文件保存路径以及文件名即可。
:::

::: details 创建自动安装的 Office ISO

``` txt
注意，该模式下的 Office Tool Plus 无法使用以下功能：
- 安装完成后创建桌面快捷方式。
- 安装完成后安装 iSlide 插件。
- 安装完成后注销/关机/重启。
- 使用 Office Tool Plus 作为安装模块。

如有以上需求，请选择前两个方式创建 Office ISO 文件。
```

保持刚才的设置不变。

用记事本或者 Visual Studio Code 等编辑器打开 RunMe.bat，修改 22 行内容如下：

``` batch
start "" "Office Tool Plus.exe" /loadConfig "%~dp0ConfigForISO.xml" /SourcePath "%~dp0"
```

保存 RunMe.bat，回到 Office Tool Plus，点击“开始部署”，选择文件保存路径以及文件名即可。

创建 ISO 完毕后，将 RunMe.bat 内容改为原来的样子，否则你将不能再次打开 Office Tool Plus.

原来的样子：

``` batch
start "" "Office Tool Plus.exe"
```

:::

创建完成后，你应该测试一下 Office ISO 是否和你预期的一样工作。
