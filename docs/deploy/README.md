# Configuration options

These are the minimum steps to deploy Office：

- Add products.
- Add languages.

Once you've done that, you're ready to start deploying Office.

## Products

If you have a genuine Office license, install your own purchased version of Office.

If you want to use KMS or MAK to activate Office, install volume products, such as Office 2019 Volume or Office 2021 Volume.

> Not sure if you have a genuine Office license? Login your personal account [here](https://account.microsoft.com/services/) or login your enterprise account [here](https://portal.office.com/account/?ref=MeControl#subscriptions).

::: details Office 365 Plan
| Office 365 Plan                   | Product ID             |
| --------------------------------- | :--------------------: |
| Microsoft 365 Apps for enterprise | O365ProPlusRetail      |
| Office 365 Enterprise E3          | O365ProPlusRetail      |
| Office 365 Enterprise E4          | O365ProPlusRetail      |
| Office 365 Enterprise E5          | O365ProPlusRetail      |
| Office 365 Midsize                | O365ProPlusRetail      |
| Office 365 Business               | O365BusinessRetail     |
| Office 365 Business Premium       | O365BusinessRetail     |
| Office Small Business Premium     | O365SmallBusPremRetail |
| Microsoft 365 E3                  | O365ProPlusRetail      |
| Microsoft 365 E5                  | O365ProPlusRetail      |
| Microsoft 365 Business            | O365BusinessRetail     |
:::

## Languages

When you click `Add Language`, Office Tool Plus will match the current system language. If the match is incorrect or you need to select another language, change it manually.

You can add one or more languages that you want. The first language in the list determines the Shell UI culture, including shortcuts, right-click context menus, and tooltips. If you decide that you want to change the Shell UI language after an initial installation, you have to uninstall and reinstall Office.

如果你没有添加语言，安装 Office 时将会自动匹配系统语言，如果系统语言无法匹配，则回退到 *高级设置 - 安装设置 - 备用语言* 所指定的语言。

If you check "Deploy proofing tools only", the language will be installed as proofing tools.

### Language Type

| Type                           | Description |
| :----------------------------- | :---------- |
| Full                           | The language pack includes display language and proofing tools. |
| Partial                        | The language pack includes display language for some Office applications and includes proofing tools. |
| Partial without proofing tools | The language pack includes display language for some Office applications but does not include proofing tools. |
| Proofing tools                 | The language pack only include spell checker. |

## Applications

The application will display different items depending on the products you selected.

`Groove` stands for **OneDrive for Business**, `Lync` stands for **Skype for Business**. Some applications, such as Teams and OneDrive, may require a system restart to complete the installation.

Bing is a extension for Chrome and Edge etc. For more information, visit [Microsoft Search in Bing and Microsoft 365 Apps for enterprise](https://docs.microsoft.com/en-us/deployoffice/microsoft-search-bing).

选择 Visio 或 Project 等产品时，由于其本身为一个不可选组件，因此不会出现在应用程序列表中。

For information on products and applications, you can view [Office Products Information](https://www.coolhub.top/tech-articles/products.html).

## Channels

In most cases, it is sufficient to select either the `Current Channel` or the `Semi-Annual Enterprise Channel`, the differences between which are listed in the following table.

| Channel                          | Release frequency                                 | Feature updates                     |
| :------------------------------- | ------------------------------------------------- | ----------------------------------- |
| Current Channel                  | At least once a month (likely more often).        | Same as release frequency.          |
| Semi-Annual Enterprise Channel   | Once a month, on the second Tuesday of the month. | Twice a year (in January and July). |
| Monthly Enterprise Channel       | Once a month, on the second Tuesday of the month. | Same as release frequency.          |
| Office 2019 Perpetual Enterprise | Once a month, on the second Tuesday of the month. | None.                               |
| Office 2021 Perpetual Enterprise | Once a month, on the second Tuesday of the month. | None.                               |

> For Office 2019/2021 Volume products, the perpetual enterprise channel is the dedicated channel.

All the channels listed in the table are stable channels.

Each channel releases security updates (if needed) on the second Tuesday of each month, which is the set schedule.

For more information, see [Overview of update channels for Microsoft 365 Apps](https://docs.microsoft.com/en-us/deployoffice/overview-update-channels)。

## Architecture

**In general, we recommend that you install the 32-bit version of Office**, 64-bit is the right choice when:

- You’re working with large data sets, like enterprise-scale Excel workbooks with complex calculations, many pivot tables, data connections to external databases, Power Pivot, 3D Map, Power View, or Get & Transform. The 64-bit version of Office may perform better in these cases.
- You’re working with extremely large pictures, videos, or animations in PowerPoint. The 64-bit version of Office may be better suited to handle these complex slide decks.
- You’re working with files over 2 GB in Project, especially if the project has many sub-projects.
- You’re developing in-house Office solutions like add-ins or document-level customization. Using the 64-bit version of Office lets you deliver a 64-bit version of those solutions as well as a 32-bit version.
- You’re working with the Large Number data type in Access, and while this data type is supported by 32-bit Access, you may see unexpected results when executing code or expressions that use native 32-bit VBA libraries. 64-bit VBA provides the LongLong data type which fully supports large numbers.

For more information, see [Choose between the 64-bit or 32-bit version of Office](https://support.microsoft.com/en-us/office/choose-between-the-64-bit-or-32-bit-version-of-office-2dee7807-8f95-4d0c-b5fe-6c6f49b8d261).

## Deployment mode

| Mode            | Description |
| --------------- | ----------- |
| Edit config     | Only for exporting/modifying XML configuration.   |
| Download        | Only for downloading Office installation. |
| Install         | You can install, uninstall, modify Office, etc. |
| Create ISO file | Package the Office installation with Office Tool Plus. Write configuration if configured. |

The Office installation contains Office, Visio and Project, provided by Microsoft.

To create an ISO file, you must first download the Office installation.

## Installation module

### Office Deployment Tool

The Office Deployment Tool is an official Microsoft tool for deploying Office. Provides full support for deploying Office.

### Office Tool Plus

The module can do most of the features of the Office Deployment Tool, and also features that the Office Deployment Tool cannot do.

The following content shows the differences between them.

| Funtions | Office Deployment Tool | Office Tool Plus |
| :------- | ---------------------- | ---------------- |
| Support for MECM.                 | √ | × |
| Update deadline.                  | √ | × |
| Migrate architecture.             | √ | × |
| Force upgrade Office.             | √ | × |
| Remove existing MSI versions of Office. | √ | × |
| Install the same language as the previous MSI version. | √ | × |
| Office applications preferences   | √ | × |
| Use Office internal channels      | × | √ |
| Install special products          | × | √ |

We recommend that Office Deployment Tools be used first. If there is a problem with Office Deployment Tools that cannot be fixed, or if there are special needs, use Office Tool Plus as installation module.

## Download settings

Download settings only take effect in *download* mode, or if *install after download* is checked.

The following content shows the differences between them.

| Engine                 | Display information | Set proxy | Pause & resume | Cancel |
| :--------------------- | --- | --- | --- | --- |
| Thunder                | ✓ | ✓ | ✓ | ✓ |
| Office Tool Plus       | ✓ | ✗ | ✗ | ✓ |
| Office Deployment Tool | ✗ | ✗ | ✗ | ✗ |

When Office Tool Plus cannot find the Thunder component, will fall back to Office Tool Plus as the download engine.

### UA

By default, Office Tool Plus automatically detects your Windows version and then downloads the appropriate version of Office for you.

If you need to download the Office for another Windows version, you can change the UA to a specific Windows version.

## Installation files manage

默认情况下，当你从 Office Tool Plus 下载 Office 安装包后，Office Tool Plus 会自动识别 Office 安装包信息并显示在此处。

如果你有本地安装包，你可以点击 *选择文件*，然后指定 Office 安装文件中的任意一个 CAB 文件。

Office ISO 镜像应先挂载或者解压后，再选择其中内含的 CAB 文件。

点击版本可以删除某个版本的 Office 安装包；点击语言则可以删除该安装包下的特定语言。

如果安装包显示错误，则不应该继续部署 Office，检查问题所在，解决问题后再继续部署操作。

点击重置可以清除安装包信息，重置源路径属性为默认值，相当于不再使用本地安装包进行部署。

## Office version

This setting is located in *Advanced settings - Installation settings*.

The latest available version of Office is installed by default.

如果你需要安装 Office 的历史版本，你可以点击右侧的刷新按钮，从 Office 服务器获取所有可用的 Office 版本，每个通道都有不同的 Office 历史版本。

如果你下载了 Office 安装包，则此处会显示相应通道下所有 Office 安装包的版本。

## Source path

This setting is located in *Advanced settings - Installation settings*.

默认情况下，在线安装 Office 时，Office 安装程序会从 Office CDN 服务器上获取 Office 安装文件。如果你在本地有 Office 安装包，则应该在安装文件管理中选择文件，而不是在此处写入路径。

如果使用了 SMB 共享 Office 安装文件，则可以在此处写入 SMB 共享路径，与此同时，还应该指定 Office 的版本号。

使用现有的安装包时，还应该确保通道与 Office 安装包对应，你不能够使用当前通道的安装包而指定半年度企业通道作为安装通道。

**In download mode, this property is used to define where to save the files.**

## Application preferences

`Application preferences are data provided by Microsoft, these texts are machine translated and may contain some grammatical errors.`

The function allow you defines application preferences for Office Apps, including VBA Macro notifications, default file locations, and default file format.

You can apply new application preferences to client computers that already have Office installed. Click "Applying preferences for Office applications" in the "View XML code" submenu.

The app preferences are applied to all existing users of the device and any new users added to the device in the future. If you apply application preferences when Office apps are running, the preferences will be applied when Office is next restarted.

## Other options

The other options are described in detail in the [Microsoft docs](https://docs.microsoft.com/en-us/deployoffice/office-deployment-tool-configuration-options), they are used in the same way.
