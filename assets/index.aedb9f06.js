import{d as s,r as t,a as i,o as d,c as a,b as c,e,f as p,F as l}from"./index.7fb736b8.js";const m=`## \u89E3\u51B3KDE\u684C\u9762\u73AF\u5883\u52A0\u8F7DDiscover\u6162\u548C\u52A0\u8F7D\u5931\u8D25\u7684\u95EE\u9898

### \u62A5\u9519\u65E5\u5FD7
\`\u65E0\u6CD5\u4ECE\u6587\u4EF6 https://autoconfig.kde.org/ocs/providers.xml \u4E2D\u52A0\u8F7D\u5185\u5BB9\u63D0\u4F9B\u8005\u7684\u4FE1\u606F\`

#### \u89E3\u51B3\u529E\u6CD51:(2022-7-17 \u5DF2\u7ECF\u5F03\u7528)
\`\`\`sh
sudo vim /etc/xdg/providers.xml
\`\`\`
#### \u5982\u679C\u6CA1\u6709\u8BE5\u6587\u4EF6\uFF0C\u5219\u81EA\u5DF1\u65B0\u5EFA\u4E00\u4E2A\u3002\u628A\u4E0B\u9762\u7684\u4EE3\u7801\u6DFB\u52A0\u5230\u8BE5\u6587\u4EF6\u4E2D
\`ProvidersUrl=http://download.kde.org/ocs/providers.xml\`

#### \u89E3\u51B3\u529E\u6CD52:

\`\`\`sh
sudo vim /etc/xdg/providers.xml
\`\`\`
\`\`\`
<providers>
  <provider>
    <id>api.kde-look.org</id>
    <location>https://api.kde-look.org/ocs/v1/</location>
    <name>api.kde-look.org</name>
    <termsofuse>https://api.kde-look.org/content/terms</termsofuse>
    <register>https://api.kde-look.org/register</register>
    <services>
      <person ocsversion="1.6"/>
      <content ocsversion="1.6"/>
    </services>
  </provider>
</providers>
\`\`\`

#### \u89E3\u51B3\u529E\u6CD53:

\`\u5C06\u4F60\u7684\u754C\u9762\u8BED\u8A00\u6539\u4E3AEnglish,\u540C\u65F6Formats\u9ED8\u8BA4\u4E3Adefault.UTF-8\u5C31\u884C\``,v=e("hr",null,null,-1),h=s({__name:"index",setup(u){const n=t(m);return(k,_)=>{const o=i("v-md-preview");return d(),a(l,null,c(3,r=>e("div",{key:r},[p(o,{text:n.value},null,8,["text"]),v])),64)}}});export{h as default};
