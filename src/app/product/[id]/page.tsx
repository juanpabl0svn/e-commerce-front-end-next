import ProductPage from '@/components/product-page';


async function Product({params} : {params: {id : string}}) {
  const req = await fetch(`http://localhost:3000/products/${params.id}`);
  const res = await req.json()
  return (
    <main className='grid place-items-center w-full h-screen'>
      <ProductPage product={res} />
    </main>
  );
}

export default Product;