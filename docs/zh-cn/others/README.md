# 更多信息

## 应用程序设置

如果需要保存 Office Tool Plus 的设置，例如语言、主题或者背景图设置，请勾选“保存设置到本地”选项。

高级设置里面可以更改语言显示格式以及开启高级功能。

### 语言显示格式

默认情况下，Office Tool Plus 显示语言为本地格式，例如英语显示为 English (United States).

- 默认：不进行任何更改，按照默认的设置显示。
- 本地名称：显示语言的本地名称，例如英语是 English，德语是：Deutsch
- 英文名称：显示语言的英文名称，例如中文是 Chinese，德语是：German
- 本地化名称：按照系统语言设置显示，例如你的系统语言是中文，那么所有的语言都显示为中文。

本地名称、英文名称以及本地化名称由 Windows 提供数据，不同版本的 Windows 显示结果可能不同。

::: tip 提示
要更改为默认值，你需要重新启动应用程序才能生效。
:::

### 高级功能

启用此选项后，Office Tool Plus 将会加载 Office 内部通道和内部产品，例如 Dogfood 通道和 Mondo 2016 产品。

## Office Tool Plus 快捷键

- <kbd>Esc</kbd>: 返回
- <kbd>F1</kbd>: 显示帮助
- <kbd>F5</kbd>: 刷新信息/重置配置（仅部署页面）
- <kbd>Ctrl + 1</kbd>: 切换到部署页面
- <kbd>Ctrl + 2</kbd>: 切换到激活页面
- <kbd>Ctrl + 3</kbd>: 切换到工具箱页面
- <kbd>Ctrl + 4</kbd>: 切换到文档转换页面
- <kbd>Ctrl + T</kbd>: 显示设置页面
- <kbd>Ctrl + B</kbd>: 显示关于页面
- <kbd>Ctrl + L</kbd>: 安装 iSlide（仅部署页面）
- <kbd>Ctrl + Shift + D</kbd>: 忽略警告或错误，强制进行部署（仅部署页面）

## Office Tool Plus 应用内命令

命令不区分大小写，按照输入顺序执行。如果路径中含有空格，请使用 "" (英文双引号) 将路径包括起来。

**/setImage path** 手动指定背景图，Path: 背景图路径（支持 JPG，PNG，支持本地路径以及 HTTP 路径）

**/getKey product-ID** 获取产品密钥，若是批量产品，返回 GVLK，其他产品则返回默认密钥。ProductID: 产品 ID，例如：ProPlus2019Volume

**/osppILByID product-ID** 安装指定产品的 Office 许可证， ProductID: 产品 ID。例如：MondoVolume

**/osppinpkey:value** 安装指定的 Office 密钥，例如：/osppinpkey:XXXXX-XXXXX-XXXXX-XXXXX-XXXXX

**/osppunpkey:value** 卸载指定的 Office 密钥，例如：/osppunpkey:XXXXX

**/osppsethst:value** 设置 KMS 主机地址，例如：/osppsethst:kms.example.com

**/osppsetprt:value** 设置 KMS 主机端口，默认 1688，例如：/osppsetprt:1688

**/osppact** 激活 Office 客户端产品

其它 OSPP 参数使用方法类似，在每个命令前添加 ospp 字眼即可，OSPP 帮助文档可从[微软官方文档](https://docs.microsoft.com/zh-cn/deployoffice/vlactivation/tools-to-manage-volume-activation-of-office)取得。
