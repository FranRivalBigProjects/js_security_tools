function analyze(){
let input=document.getElementById('input').value||"";

let insights = "";
if(input.includes("<script>")) insights += "Potential XSS payload detected.<br>";
if(input.includes("fetch(") || input.includes("XMLHttpRequest")) insights += "Possible CSRF/API call detected.<br>";
if(input.includes("eval(")) insights += "Unsafe eval usage detected.<br>";
if(input.includes("innerHTML")) insights += "DOM injection risk.<br>";
if(input.includes("require(") || input.includes("import")) insights += "Dependency usage detected. Check vulnerabilities.<br>";

if(!insights) insights = "No obvious issues detected.";

document.getElementById('result').innerHTML =
"<b>Security Analysis:</b><br>" + insights;
}
