from Products.Five.browser import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from Products.CMFPlone.resources import add_resource_on_request
from plone import api
import base64
from html.parser import HTMLParser
from plone.app.textfield.value import RichTextValue
from plone.namedfile.field import NamedBlobImage
from plone import namedfile
import cgi, cgitb



class AddDocumentView(BrowserView):
    """ """
   


class ShowView(BrowserView):
    #template=ViewPageTemplateFile("template/show_view.pt")
        
    def __call__(self):
        portal = api.portal.get()
        url = api.portal.get().absolute_url()
        text=self.request.form.get('text')
        bs64_image=self.request.form.get('b64_image')
        image_title=self.request.form.get('image_title')
        b64_file=self.request.form.get('b64_file')
        file_title=self.request.form.get('filetitle')
        
        file=b64_file.split(',')[1]
        image=bs64_image.split(',')[1]
        
        obj = api.content.create(
            type='Document',
            title=self.request.form["title"],
            description=self.request.form["description"],
            text= RichTextValue(text),
            image=namedfile.NamedBlobImage(data=base64.b64decode(image), filename=unicode(image_title)),
            file=namedfile.NamedBlobFile(data=base64.b64decode(file),filename=unicode(file_title)),
            container=portal)
        self.request.response.redirect(url)
        return

    
        
        