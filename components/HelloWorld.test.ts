import { test, expect, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  test('Mount', async () => {
    expect(HelloWorld).toBeTruthy()

    const wrapper = mount(HelloWorld)

    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000))
    console.log(document.body.innerHTML)

    expect(wrapper.element).toBeTruthy()
  })
})
