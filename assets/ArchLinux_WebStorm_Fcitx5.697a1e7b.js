const n=`## \u89E3\u51B3\u5728KDE\u684C\u9762\u73AF\u5883WebStorm\u4E0D\u80FD\u8F93\u5165\u4E2D\u6587\u95EE\u9898

- \u7531\u4E8Ejetbrains\u5B98\u65B9\u5305\u7684\u95EE\u9898\uFF0CFcitx5\u8F93\u5165\u6CD5\u6587\u5B57\u5019\u9009\u6258\u76D8\u6682\u65F6\u4E0D\u80FD\u66F4\u6539\uFF0C\u5982\u6709\u6700\u65B0\u89E3\u51B3\u529E\u6CD5\uFF0C\u53EF\u67E5\u770BArchWiki\u5B98\u65B9\uFF0C\u6216\u8005\u67E5\u770Bjetbrains\u5B98\u65B9

- \u6392\u67E5\u9519\u8BEF
  - \`cat /etc/locale.conf\` # LANG=en_US.UTF-8
  - \`sudo vim /etc/locale.gen\`
    - \u4E3A\u4E86\u9632\u6B62\u9519\u8BEF\uFF0C\u8BF7\u653E\u884C
    \`\`\`shell
    en_US.UTF-8 UTF-8
    zh_CN.UTF-8 UTF-8
    zh_HK.UTF-8 UTF-8
    zh_TW.UTF08 UTf-8UTF-8
    \`\`\`
  - \`sudo vim /etc/environment\`
    - \u68C0\u67E5\u73AF\u5883\u53D8\u91CF\u914D\u7F6E
    \`\`\`shell
    GTK_IM_MODULE=fcitx
    QT_IM_MODULE=fcitx
    XMODIFIERS=@im=fcitx
    SDL_IM_MODULE=fcitx
    \`\`\`
  - \u68C0\u67E5\u8BBE\u7F6E\u533A\u57DF\u548C\u8BED\u8A00\u683C\u5F0F(Language and Formats)
    - Language \u7B80\u4F53\u4E2D\u6587\u8BBE\u7F6E\u4E3A\u7B2C\u4E00\u4E2A
    - Formats Region \u8BBE\u7F6E\u4E3Azh_CN.UTF-8

- \u4EE5\u4E0A\u90FD\u8BBE\u7F6E\u597D\u4E86\uFF0C\u91CD\u542F\uFF0C\u5982\u679C\u8FD8\u4E0D\u53EF\u4EE5\uFF0C\u5C31\u7B49jetbrains\u5B98\u65B9\u89E3\u51B3`;export{n as default};
