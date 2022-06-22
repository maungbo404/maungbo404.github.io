// result function
function result() {
    let name = document.myform.name.value;
    console.log(name);

    let html = document.myform.html.value;
    console.log(html);

    let css = document.myform.css.value;
    console.log(css);


    let js = document.myform.js.value;
    console.log(js);

    //fail
    if (html < 50 || css < 50 || js < 50) {

        if (html < 50 && css < 50 && js < 50) {
            let fail = 'all subjects are fail, So ';
            document.write('<h1>' + name + ' \' ' + fail + name+  ' is Exam Fail</h1>');
        }
        else if (html < 50 && css < 50) {
            let fail = 'HTML and CSS subjects are fail, So '
            document.write('<h1>' + name + ' \' ' + fail + name+  ' is Exam Fail</h1>');
        }
        else if (html < 50 && js < 50) {
            let fail = 'HTML and JavaScript subjects are fail, So '
            document.write('<h1>' + name + ' \' ' + fail + name+  ' is Exam Fail</h1>');
        }
        else if (css < 50 && js < 50) {
            let fail = 'CSS and JavaScript subjects are fail, So '
            document.write('<h1>' + name + ' \' ' + fail + name+  ' is Exam Fail</h1>');
        }
        // one sub
        else if (html < 50) {
            let fail = 'HTML subject is fail, So '
            document.write('<h1>' + name + ' \' ' + fail + name+  ' is Exam Fail</h1>');
        }
        else if (css < 50) {
            let fail = 'CSS subject is fail, So '
            document.write('<h1>' + name + ' \' ' + fail + name+  ' is Exam Fail</h1>');
        }
        else if (js < 50) {
            let fail = 'JavaScript subject is fail, So '
            document.write('<h1>' + name + ' \' ' + fail + name+  ' is Exam Fail</h1>');
        }
    }


    //pass with honor
    else if (html >= 81 || css >= 81 || js >= 81) {
        if (html >= 81 && css >= 81 && js >= 81) {
            let honor = 'All Subjects';
            document.write('<h1>' + name + 'is Exam Pass with ' + honor + ' Honor </h1>')
        }
        else if (html >= 81 && css >= 81) {
            let honor = 'HTML and CSS';
            document.write('<h1>' + name + 'is Exam Pass with ' + honor + ' Honor </h1>')
        }
        else if (html >= 81 && js >= 81) {
            let honor = 'HTML and JavaScript';
            document.write('<h1>' + name + 'is Exam Pass with ' + honor + ' Honor </h1>')
        }
        else if (css >= 81 && js >= 81) {
            let honor = 'CSS and JavaScript';
            document.write('<h1>' + name + 'is Exam Pass with ' + honor + ' Honor </h1>')
        }
        // one sub
        else if (html >= 81) {
            let honor = 'HTML';
            document.write('<h1>' + name + 'is Exam Pass with ' + honor + ' Honor </h1>')
        }
        else if (css >= 81) {
            let honor = 'CSS';
            document.write('<h1>' + name + 'is Exam Pass with ' + honor + ' Honor </h1>')
        }
        else if (js >= 81) {
            let honor = 'JavaScript';
            document.write('<h1>' + name + 'is Exam Pass with ' + honor + ' Honor </h1>')
        }
    }

    //pass
    else if (html >= 50 && html < 81 && css >= 50 && css < 81 && js >= 50 && js < 81) {
        document.write('<h1>' + name + ' is Exam Pass! </h1>');
    }

}