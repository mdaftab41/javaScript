const inser = document.getElementById('insert')
// selecting complete  window
window.addEventListener('keydown' , (e)=>{
    inser.innerHTML=`
    <div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' '?'space':e.key} </td>
    <td>${e.keyCode} </td>
    <td>${e.code} </td>
  </tr>
</table>
    </di>
    `;
});