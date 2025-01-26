function generateYoutubeTemplate({ title, description, tags }) {
    return {
      title: title,
      description: description,
      tags: tags
    };
  }


  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
  const TemplateYoutube = {
      title: "Anonymous",
      description: "Wallet -ia ",
      tags: "Pi",
    };
    
  const Template = generateYoutubeTemplate(TemplateYoutube);
  console.log(Template)