# More

## Application Settings

### Save settings to local

Check it will save application settings, such as language, theme and background image settings.

### Language display name

By default, Office Tool Plus displays the native name of languages.

- Normal: Display in default format.
- Native name: Display the native name of languages.
- English name: Display the languages name in English.
- Localized name: Display according to the system language setting. If your system language is English, all of the languages will display in English.

Language names are data provided by Windows and may be displayed differently by different versions of Windows.

::: tip Tip
To change the language display name to normal, you need to restart application to take effect.
:::

### Advanced features

Check it if you want to use Office internal channels.

## Office Tool Plus shortcut keys

- <kbd>Esc</kbd>: Back.
- <kbd>F1</kbd>: Help.
- <kbd>F5</kbd>: Refresh Office information and reset deploy settings (on deploy page).
- <kbd>Ctrl + 1</kbd>: Switch to deploy page.
- <kbd>Ctrl + 2</kbd>: Switch to activate page.
- <kbd>Ctrl + 3</kbd>: Switch to toolbox page.
- <kbd>Ctrl + 4</kbd>: Switch to documents converter.
- <kbd>Ctrl + T</kbd>: Display setting page.
- <kbd>Ctrl + B</kbd>: Display about page.
- <kbd>Ctrl + L</kbd>: Install iSlide (on deploy page).
- <kbd>Ctrl + Shift + D</kbd>: Ignore errors or warnings, force start deploy (on deploy page).

## Office Tool Plus In-application commands

The commands are case-insensitive and are executed in the order they are entered. If the path contains spaces, use "" (double quotes) to include the path.

**/setImage path** Set the background image, support local, network and HTTP path.

**/clImage** Clear current background image.

**/getKey product-ID** Get a normal product key for a license, if the product is volume product, return GVLK instead.

**/osppILByID product-ID** Install licenses and normal key with a user-provided product ID.

**/osppinpkey:value** Install a product key, example: /osppinpkey:XXXXX-XXXXX-XXXXX-XXXXX-XXXXX

**/osppunpkey:value** Uninstall an installed product key with the last five digits of the product key to uninstall. Example: /osppunpkey:XXXXX

**/osppsethst:value** Sets a KMS host name. Example: /osppsethst:kms.example.com

**/osppsetprt:value** Sets a KMS port, the default port number is 1688. Example: /osppsetprt:1688

**/osppact** Activates installed Office product keys.

Other OSPP commands are used in a similar way, just add the "ospp" in front of each command, the OSPP help documentation is available from [Microsoft docs](https://docs.microsoft.com/en-us/deployoffice/vlactivation/tools-to-manage-volume-activation-of-office).
