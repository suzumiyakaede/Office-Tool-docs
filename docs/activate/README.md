# Function Introduction

Users who have already bought the Office authorization can activate their office by opening Office application and login their Microsoft account.

If you have already installed Office, the left activation information may cause weird issues. If these problems happens, you may goto "License Management" or "Key Management" to find "clean Activation Information"

## License Management

If you didn't install Office, or the existing version of Office is too old, Office Tool Plus will NOT read the Office license information, and will NOT show the license in the drop-down list.

### Installing Licenses

You can find the license you need in the license drop-down list, and then click "install license" to start the operation. Office Tools Plus has integrated default keys for the retail licenses, and GVLK keys for the volume licenses. As a result, you can use KMS to activate your Office just after you installed the volume license without additionally installing GVLK keys.

When you are installig a license, the original licenses will NOT be covered or cleaned, so the licenses will coexist.

### Installing Other Licenses

You can install other licenses if you need. Usually, Office licenses is stored at `C:\Program Files\Microsoft Office\root\Licenses16`, you can copy it to other computers. This feature will NOT install keys. You need to install it by yourself.

### Resetting License Status

This function will reset the license to unactivated status. You can choose to reset all licenses or a certain license.

### Cleaning All Licenses

This function will delete ALL Office licenses on your computer, but it will NOT delete the keys. So there's no change if you reinstall the licenses.

## Key Management

### Installing Keys

Type in a full Office key and you can install it. If you get a "Product SKU not found" notice, please to be sure that you have already installed the license to this key.

An example of the key: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX

### Uninstalling Keys

Type in the last five digits (or characters) and you can uninstall the key, you may use "view activation information" to find the key information.

### Viewing Installation ID (IID)

This function will show the Installation ID of every license, this ID is used when activating Office by telephone.

### Installation Confirm ID (CID)

You can type in your CID to activate by telephone with this function.

## KMS management

KMS host can be a hostname，or an IP address.
For example：kms.example.com or 192.168.123.1

The default port of the KMS host is 1688，You may choose the custom port if necessary.

You can only apply the port, or apply the port with the host address. If the KMS port is not empty, clicking "save settings" will also save the port setting.

## Cleaning Activation Status

This function will delete all Office licenses and keys on your system. Your Office Activation status will be lost. And if you don't install new licenses, Office applications will report an error at the first time it starts.

## Activation Steps

### Key Activation（Online Activation）

Type in your Office product key in "Key management" and click "install key", and click "activate".

If it reports a "product SKU not found" error, install the license(s) to the key(s) and retry.

### Telephone Activation（Offline Activation）

After you make sure you have installed the right key, click "view installation ID" in the menu of "key management", and install the CID you finally get.

If it reports a "product SKU not found" error, install the license(s) to the key(s) and retry.

### KMS Activation（Needs Internet Connection to KMS Host）

Choose and install a volume license in "license management". Then set a KMS host in "KMS management". Click on "apply" and then click "activate".

`KMS Activation is valid in 180 days，for default cases，system will renew it every 7 days。`KMS renewing interval is managed by the KMS host.

## View Activation Information

This function will show the information of all the keys and licenses installed on your computer, including SKU ID, key information, and license(s) status. If you use KMS licenses, it will also show the information of the KMS host.

## View License Information

This function will show all the existing licenses on your computer, regardless of whether the license has a key installed.
