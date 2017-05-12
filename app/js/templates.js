
function renderTmplts(){
  $.getJSON('data.json',function(data){
    var tlcont = document.getElementById('myData').innerHTML;
    var dataTemplate = dust.compile(tlcont, 'myTmpl');
    dust.loadSource(dataTemplate);
    dust.render('myTmpl', data, function(err, res){
      document.getElementById('container').innerHTML = res;
    });
  });
  initCaseStudies();
  $('#case-studies').load('../templates/layouts/templates.html');
}
window.addEventListener('load', renderTmplts);
