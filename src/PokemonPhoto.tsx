export default function PokemonPhoto({ imageUrl, name, }: { imageUrl: string; name: string; }) {
  return <img
    src={imageUrl} alt={`Card of ${name}`}
  />;
}