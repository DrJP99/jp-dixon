function getPath(){
    var str=window.location.href;
    var str_array=str.split('/');
    var construct=false;
    var res="";
    str_array.forEach(element => {
        if(construct ){
            res+="../";
            return;
        }
        element=element.toLowerCase();
        if(element=="html" || element=="src"){
            construct=true;
        }
    });
    return res;
}

$(document).ready(function(){
    //file with relative path to index outside html folder
    $.get("https://jp-dixon.com/js/navbar.html", function(html_string){
        $("#navbar").html(html_string);
        $("#navbar a").each(function() {

            var _href = this.getAttribute("href");
            if( typeof(_href) != 'undefined' && _href!="" && _href.search(".html")!=-1){
                $(this).prop("href", "https://jp-dixon.com/js/navbar.html"+_href);
            }
        });
    });
    $.get(getPath()+"/js/footer.html", function(html_string){
        $("#footer-bar").html(html_string);
        $("#footer-bar a").each(function() {

            var _href = this.getAttribute("href");
            if( typeof(_href) != 'undefined' && _href!="" && _href.search(".html")!=-1){
                $(this).prop("href", getPath()+_href);
            }
        });
    });
});
