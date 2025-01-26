function generateFacebookTemplate({ title, description, tags }) {
    return {
      title: title,
      description: description,
      tags: tags
    };
  }


  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
  const TemplateFacebook = {
      title: "Anonymous",
      description: "Wallet -ia ",
      tags: "Pi",
    };
    
  const Template = generateFacebookTemplate(TemplateFacebooke);
  console.log(Template)