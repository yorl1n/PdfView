Ext.define('PdfView.Application', {
    extend: 'Ext.app.Application',
    name: 'Cfd',
    init: function () {
        Ext.create('PdfView.view.Viewport', {
            renderTo: document.getElementById('content')
        });
    }
  });
