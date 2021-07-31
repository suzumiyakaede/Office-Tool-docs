# 配置選項

使用 Office Tool Plus 部署 Office 時，以下兩件事為部署 Office 最基本的要求：

- 新增產品
- 新增語言套件

## 產品

 - 購買了 Microsoft 365 的用戶，新增產品的時候，選擇 Microsoft 365 產品即可，具體視你所擁有的授權，而選擇家用版、個人版或企業版。
 - 購買了 Office 2019/2021 的用戶，按照自己購買的版本選擇即可，例如家用版、個人版、專業增強版。
 - 如果需要使用 KMS 或 MAK 啟用，請安裝大量授權版產品，例如 Office 2019 大量授權版或 Office 2021 大量授權版。

> 不確定自己是否擁有 Office 授權？個人帳戶請[從這裡檢視](https://account.microsoft.com/services/)，企業用戶可以[從這裡檢視](https://portal.office.com/account/?ref=MeControl#subscriptions)。

::: details Office 365 產品對照表
| 訂閱版本        | 產品 ID  |
| ------------- |:-------------:|
| Microsoft 365 Apps 企業版 | O365ProPlusRetail |
| Office 365 企業版 E3 | O365ProPlusRetail |
| Office 365 企業版 E4 | O365ProPlusRetail |
| Office 365 企業版 E5 | O365ProPlusRetail |
| Office 365 中小型企業版 | O365ProPlusRetail |
| Office 365 商務版 | O365BusinessRetail |
| Office 365 商務進階版 | O365BusinessRetail |
| Office 365 小型企業進階版 | O365SmallBusPremRetail |
| Microsoft 365 E3 | O365ProPlusRetail |
| Microsoft 365 E5 | O365ProPlusRetail |
| Microsoft 365 商務版 | O365BusinessRetail |
:::

## 語言套件

按下[新增語言(套件)]後，Office Tool Plus 將會預設選取目前系統語言，若預設選取的並不正確，或是需要使用其他語言，請手動變更。

語言套件可以設定多個，新增的套件列表中的首個**完整類型**的語言套件，將決定 Shell UI 區域性，包括捷徑、右鍵選項和工具提示。如在安裝完畢後要修改 Shell UI 的語言，只能移除並重新安裝 Office。

若您在開始部署前沒有選取語言套件，Office 將以系統語言進行安裝。如果系統語言無法安裝，則將安裝 *進階設定 -> 安裝設定 -> 備用語言* 中所設定的語言值。

如果您選取了「僅部署校訂工具」，則該項語言會在安裝時被視為校訂工具，不會包含 Office 顯示語言。

### 套件類型區別

| 套件類型　　　　　　　| 說明 |
| :------------------ | :--- |
| 完整　　　　　　　　　| 語言套件中包含顯示語言和校訂工具 |
| 部分　　　　　　　　　| 語言套件中包含部分 Office 顯示語言，包含完整校訂工具 |
| 部分但不包含校訂工具  | 語言套件中包含部分 Office 顯示語言，但不包含校對工具 |
| 校對工具　　　　　　　| 語言包僅包含校閱工具 |

## 應用程式

應用程式會隨你選擇的產品不同而顯示不同的內容。

Groove 代表的是 OneDrive for Business, Lync 代表的是 Skype for Business. 某些應用程式 (例如 Teams, OneDrive) 可能需要重新開機才能完成安裝。

Bing 是一個用於 Chrome 和 Edge 的擴充程式。如要瞭解更多，請前往 [Bing 專用 Microsoft 搜尋和 Microsoft 365 應用程式企業版](https://docs.microsoft.com/zh-tw/deployoffice/microsoft-search-bing).

選擇 Visio 或 Project 等產品時，由於其本身為一個不可選組件，因此不會出現在應用程式列表中。請從「產品」中選取它們。

有關產品和應用程式的資訊，請前往 [Office Products Information](https://www.coolhub.top/tech-articles/products.html) 查看。

## 頻道

大多數情況下，只需要從目前通道或者半年企業通道選取即可，下表列出了各通道之間的區別：

| 通道                   | 發布頻率                       | 功能更新            |
| --------------------- | ------------------------------ | ------------------- |
| 目前頻道               | 每個月至少一次 (可能更頻繁)  | 同發布頻率             |
| 半年企業通道           | 每個月一次，每月的第二個星期二 | 一年兩次(一月和七月) |
| 企業用每月通道         | 每個月一次，每月的第二個星期二 | 同發布頻率            |
| Office 2019 永久企業版 | 每個月一次，每月的第二個星期二 | 無                    |
| Office 2021 永久企業版 | 每個月一次，每月的第二個星期二 | 無                    |

> 永久企業版通道是 Office 2019/2021 大量授權版的專用通道。
表中列出的所有通道皆為穩定頻道，非測試頻道，因此皆可日常使用。

每個通道都會在每個月的第二個星期二發布安全更新 (如果需要)，這是設定好的計劃。

如果需要瞭解詳細資訊，請參閱 [Microsoft 365 Apps 更新通道的概觀](https://docs.microsoft.com/zh-tw/deployoffice/overview-update-channels)。

## 架構

**正常情況下，我們推薦您安裝 32 位元的 Office**，但如果存在下列情況，則推薦安裝 64 位元的 Office:

- 處理大型數據集，例如包含複雜計算、許多數據透視表、與外部數據庫的數據連線、PowerPivot、三維地圖、PowerView 或取得和轉換的企業級 Excel 試算表。 在這些情況下，64 位版 Office 可能表現更出色。
- 在 PowerPoint 中處理超大圖片、影片或動畫。 64 位元的 Office 可能更適合處理這些複雜投影片。
- 在 Project 中處理超過 2 GB 的文件，尤其是項目包含許多子項目時。
- 開發內部 Office 解決方案，例如增益集或檔案類型級別的自訂化。 使用 64 位元的 Office 將允許你提供這些解決方案的 64 位元版和 32 位元版。
- Access 中的 Long Long 數據類型，雖然 32 位 Access 支援此數據類型，但在使用 32 位 VBA 庫的代碼或表達式時可能會看到意外結果。 64 位 VBA 提供 Long Long 數據類型的完整支援。

如果需要瞭解詳細資訊，請參閱[選擇 64 位元或 32 位元版的 Office](https://support.microsoft.com/zh-tw/office/%E9%80%89%E6%8B%A9-64-%E4%BD%8D%E6%88%96-32-%E4%BD%8D%E7%89%88%E6%9C%AC%E7%9A%84-office-2dee7807-8f95-4d0c-b5fe-6c6f49b8d261)

## 部署模式

| 模式          | 說明 |
| ------------- | ----- |
| 編輯設定      | 僅用於建立/修改 XML 配置文件，不能進行部署   |
| 下載          | 僅下載 Office 安裝文件，不會、不能啟動安裝程式 |
| 安裝          | 可以在電腦上上進行安裝、移除、修改 Office 等操作 |
| 建立 ISO 檔案 | 將 Office 安裝檔案與 Office Tool Plus 綑綁成 ISO 檔，如果有安裝配置，則連同配置一起寫入 ISO 中 |

Office 安裝文件包含 Office、Visio 和 Project，由 Microsoft 提供，無法精簡。

若要建立 ISO 檔案，必須先下載 Office 安裝檔案。

## 安裝模組

### Office 部署工具

Office 部署工具是 Microsoft 官方工具，提供了部署 Office 的完整支援，適合所有人使用。

### Office Tool Plus

這個模組是我們自行開發的，可以實現 Office 部署工具的大多數功能，並且還有 Office 部署工具無法做到的功能。缺點自然是不支援部分部署功能。

下表列出了兩者之間的區別：

| 功能 | Office 部署工具 | Office Tool Plus |
| :-- | --- | --- |
| MECM 支持                    | √ | × |
| 更新截止時間                 | √ | × |
| 變更架構                 | √ | × |
| 強制更新 Office              | √ | × |
| 移除電腦中的 MSI 版本 | √ | × |
| 安裝與 MSI 版本相同的語言    | √ | × |
| Office 應用程式喜好設定        | √ | × |
| 使用 Office 內部通道         | × | √ |
| 安裝特殊產品                 | × | √ |

我們建議優先使用 Office 部署工具，如果 Office 部署工具出現了無法修復的問題，或者有特殊需求，才應該選擇 Office Tool Plus 作為安裝模組。

## 下載設定

下載設定僅在 *下載* 模式，或者在勾選 *下載後安裝* 的情況下生效。

下載引擎的區別：

| 引擎                   | 顯示下載信息 | 設置代理 | 暫停 & 繼續 | 取消 |
| :--------------------- | --- | --- | --- | --- | --- |
| Thunder                  | ✓ | ✓ | ✓ | ✓ |
| Office Tool Plus       | ✓ | ✗ | ✗ | ✓ |
| Office 部署工具         | ✗ | ✗ | ✗ | ✗ |

通常情況下，使用 Thunder 下載引擎是一個不錯的選擇，它不僅能夠提供多種功能，下載速度也會變得更快，此功能並非使用 P2P，而是傳統的 HTTP 協議。

當 Office Tool Plus 找不到 Thunder 模組時，將會使用 Office Tool Plus 作為下載引擎。

### UA 設定

預設情況下，Office Tool Plus 會自動偵測你的 Windows 系統版本，然後為你下載合適的 Office 版本。

如果您需要為其他的 Windows 版本下載 Office 安裝包，你可以修改 UA 成特定的 Windows 版本。

## 安裝檔案管理

預設情況下，當你從 Office Tool Plus 下載 Office 安裝檔案後，Office Tool Plus 會自動識別 Office 安裝資訊並顯示在此處。

如果你有本地安裝檔案，你可以點選「*選擇檔案*」，然後選擇 Office 安裝文件中任意一個 CAB 檔案。

Office ISO 鏡像應先掛載或者解壓後，再選取其中內含的 CAB 檔案。

點選列表中的版本編號，可以刪除該版本的 Office 安裝檔案；點擊語言則可以刪除該版本編號下的特定語言。

如果安裝包顯示錯誤，則不應該繼續部署 Office。檢查問題所在，解決問題後再繼續部署操作。

點選重置可以重設安裝檔案資訊，重置來源路徑屬性為預設值，相當於不再使用本地安裝檔案進行部署。

## 版本

此設置位於 *進階設定 -> 安裝設定* 中。

預設安裝 Office 可用的最新版本，您無需再設定 Office 的版本編號。

如果您需要安裝 Office 的歷史版本，你可以點選右側的「重新載入」，從 Microsoft Office 伺服器，索取所有可用的 Office 版本，每個通道都有不同的 Office 歷史版本。

如果你下載了 Office 安裝檔案，則此處會顯示相應通道下所有 Office 安裝檔案的版本。

## 來源路徑

此設置位於 *進階設定 -> 安裝設定* 中。

預設情況下，使用網路安裝 Office 時，Office 安裝程式會從 Office CDN 伺服器上索取 Office 安裝檔案。而若您在本地有 Office 安裝檔案，則應該在安裝檔案區塊中選取檔案，而不是在此處填入路徑。

如果使用了 SMB 共用 Office 安裝文件，則可以在此處寫入 SMB 共用路徑，與此同時，還應該指定 Office 的版本編號。

使用現有的安裝檔案時，應確保通道與 Office 安裝檔案對應，您不能夠使用目前通道的安裝檔案，而指定半年企業通道作為安裝頻道。

**在下載模式，來源路徑屬性用於指定應將 Office 安裝檔案儲存在什麼位置。**

## 應用程式喜好設定

`應用程式喜好設定是由 Microsoft 提供數據，其文字均為機器翻譯，可能存在某些語法錯誤，請以英文版本的為準。`

應用程式喜好設定使你可以在部署 Office 前，修改 Office 應用程式內的喜好設定，例如 VBA 巨集通知、預設文件儲存位址和預設檔案格式。

除此之外，你還可以將應用程式喜好設定，套用到現有的 Office 中。配置完畢後，在「*檢視代碼*」的子目錄中選擇「*套用 Office 喜好設定*」即可，Office 部署工具將自動套用設定。

您定義的應用程式戲好設定，將套用於裝置的所有現有使用者，包括未來所新增的。如果在套用喜好設定時，Office 應用程式處於執行狀態，則新的喜好設定，將在下次 Office 應用程式執行時生效。

## 其他選項

其他選項介紹以及用法在[Microsoft 官方文件](https://docs.microsoft.com/zh-tw/deployoffice/office-deployment-tool-configuration-options)中有詳細介紹，使用方法相同，在這裡不再重複敘述。
