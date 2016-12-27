require 'spec_helper'
describe '<%= ModuleName %>' do
  context 'with default values for all parameters' do
    it { should contain_class('<%= ModuleName %>') }
  end
end
