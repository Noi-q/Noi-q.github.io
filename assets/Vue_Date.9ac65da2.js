const t=`## \u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u7684\u4E0B\u4E00\u5929\u65F6\u95F4

\`\`\`javascript
const a = this.getNextDay(new Date())
function getNextDay(day){
  var date = new Date(day)
  date = new Date(date.getTime()+1000*60*60*24)
  var month = date.getMonth()+1
  var day = date.getDate()
  var nextDate = date.getFullYear()+"-"+(month<10?("0"+month):month)+"-"+(day<10?("0"+day):day)
  return nextDate
}
\`\`\``;export{t as default};
