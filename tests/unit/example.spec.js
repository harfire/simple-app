import { shallowMount } from '@vue/test-utils';
import SimpleApp from '@/components/SimpleApp.vue';

describe('SimpleApp.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(SimpleApp, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
