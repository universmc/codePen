function generateTwitterTemplate({ title, description,article tags }) {
    return {
      title: title,
      description: description,
      article: article,
      tags: tags
    };
  }


  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
  const TemplateTwitter = {
      title: "Anonymous",
      description: "Wallet -ia ",
      article: "Wallet -ia ",
      tags: "Pi",
    };
    
  const Template = generateTwitterTemplate(TemplateTwitter);
  console.log(Template)