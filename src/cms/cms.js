import CMS from 'netlify-cms'
import BlogPostPreview from './preview-templates/BlogPostPreview'


//-- path is absolute from built project
//-- Gatsby compiles .css files to `styles.css` despite the file in `layouts/` 
//-- being named 'style.css'
CMS.registerPreviewStyle('/styles.css')
//-- Tells Netlify CMS what component is rendered for template key 'blog'
CMS.registerPreviewTemplate('blog', BlogPostPreview)
