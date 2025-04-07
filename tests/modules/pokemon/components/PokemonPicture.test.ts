import { describe, expect, test } from 'vitest';
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<PokemonPicture />', () => {
  const pokemonId = 25;
  const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

  test('should render the hidden image when showPokemon prop is false', () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId: pokemonId, showPokemon: false },
    });
    // console.log(wrapper.html());

    const image = wrapper.find('img');
    const attributes = image.attributes();

    expect(attributes).toEqual(
      expect.objectContaining({
        src: imageSource,
        class: 'brightness-0 h[200px]',
      }),
    );

    // expect(image.attributes('src')).toBe(imageSource);
  });

  test('should render the image showPokemon prop is true', () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId: pokemonId, showPokemon: true },
    });
    console.log(wrapper.html());

    const image = wrapper.find('img');
    const attributes = image.attributes();

    expect(attributes).toEqual(
      expect.objectContaining({
        src: imageSource,
        class: 'fade-in h[200px]',
        alt: 'Pokemon image',
      }),
    );
  });
});
