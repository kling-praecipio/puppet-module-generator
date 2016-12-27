
module.exports = {

  name: 'Generic Puppet Module',

  description: 'Generic puppet module similar to puppet module generate command',

  directory: false,

  params: ['ModuleName', 'UserName', 'Summary'],

  rules: function(config) {
    var actionsName = config.ModuleName

    return({
      items: [
        {
          destinationFile: config.ModuleName+'/examples/init.pp',
          sourceTemplateFile: 'examples/init.pp'
        },
        {
          destinationFile: config.ModuleName+'/Gemfile',
          sourceTemplateFile: 'Gemfile'
        },
        {
          destinationFile: config.ModuleName+'/manifests/init.pp',
          sourceTemplateFile: 'manifests/init.pp'
        },
        {
          destinationFile: config.ModuleName+'/metadata.json',
          sourceTemplateFile: 'metadata.json'
        },
        {
          destinationFile: config.ModuleName+'/Rakefile',
          sourceTemplateFile: 'Rakefile'
        },
        {
          destinationFile: config.ModuleName+'/README.md',
          sourceTemplateFile: 'README.md'
        },
        {
          destinationFile: config.ModuleName+'/spec/classes/init_spec.rb',
          sourceTemplateFile: 'spec/classes/init_spec.rb'
        },
        {
          destinationFile: config.ModuleName+'/spec/spec_helper.rb',
          sourceTemplateFile: 'spec/spec_helper.rb'
        }
      ]
    })

  }

}
