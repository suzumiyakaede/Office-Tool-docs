# 建立 Office ISO

## 序言

透過 Office ISO 檔案，您將可以與其他人共享 Office 安裝檔案，可用於大量、多次部署，適合公司使用。

### 提醒

為了確保您得到最佳體驗，請確保您始終從我們的 [官方網站](https://otp.landian.vip/) 下載了最新的 with runtime 版本的 Office Tool Plus。在必要時，我們會更新函式庫文件和 RunMe.bat 檔案，這些檔案並不會隨著 Office Tool Plus 更新系統跟著更新。需要您手動重新下載。

另外，我們也建議您**每一個月的第二個星期二**更新一次 Office ISO 文件，使得 Office 能處在最新版本中。

::: Hint
with runtime 版本的 Office Tool Plus 允許您在沒有安裝 .NET Desktop Runtime 函式庫的情況下直接執行程式，且還可設定參數，這對於大量部署非常有幫助。
:::

## 下載 Office 安裝文件

在確保您自己使用的 Office Tool Plus 無誤後，雙擊 RunMe.bat 開啟 Office Tool Plus。

1. 進入部署功能頁，在右側的「基本設定」-> 「部署設定」中切換部署模式為「下載」。
2. 新增產品，按照您的需求（例如 Office 2021 專業增強版 (大量授權)）。
3. 新增語言套件，按照您的需求。**若不新增，安裝時將需要網際網路連線下載。**
4. 一句要修改架構和頻道設定，其餘設定可依照您的需求設定。

確認設定無誤後，點擊「開始部署」。等待下載完畢後，接續進行建立 Office ISO 文件。

## 建立 Office ISO 檔案

完成下載 Office 安裝文件後，請確保「安裝檔案管理」是否能正確載入，且正確識別 Office 安裝檔案資訊。
確認識別正確後，請在右側的「基本設定」-> 「部署設定」中切換部署模式為「建立 ISO 檔案」。

-----

下方提供三種方式建立 ISO 檔案，請選擇適合您的進行：

::: details 建立內含預設設定檔的 Office ISO
不進行任何設定變更，直接點擊「開始部署」，選擇檔案儲存路徑和檔案名稱即可。

此模式下的 Office Tool Plus 會自動配對 Office 安裝文件路徑，因此您不需要清除、修改路徑參數。
:::

::: details 建立不含預設設定檔的 Office ISO
按下 [F5]鍵，或者手動清除產品和語言套件，然後點擊「開始部署」，選擇文件儲存路徑和和檔案名稱即可。
:::

::: details 建立自動安裝的 Office ISO

``` txt
❗注意❗ 此模式下的 Office Tool Plus 無法部署(使用)以下功能：

- 安裝完成後建立桌面捷徑。
- 安裝完成後自動安裝 iSlide 擴充程式。
- 安裝完成後登出/關機/重新啟動系統。
- 使用 Office Tool Plus 安裝模組進行安裝。

如有以上需求，請不要選擇此方式建立 Office ISO 檔案。
```

不進行任何設定變更，使用記事本或 Visual Studio Code 或其他文字編輯程式打開 RunMe.bat，修改第 22 行程如下：

``` batch
start "" "Office Tool Plus.exe" /loadConfig "%~dp0ConfigForISO.xml" /SourcePath "%~dp0"
```

然後儲存 RunMe.bat，回到 Office Tool Plus ，點擊「開始部署」，最後選擇文件儲存路徑和和檔案名稱即可。

結束建立 ISO 檔案後，請將 RunMe.bat 的內容修正回原來的狀態，否則您無法再次開啟 Office Tool Plus。

``` batch
start "" "Office Tool Plus.exe"
```

:::
