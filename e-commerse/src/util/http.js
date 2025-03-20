export async function fetchData() {
  const response = await fetch(
    "https://golf-shop-application-default-rtdb.europe-west1.firebasedatabase.app/golf.json"
  );

  if (response.status === 401 || response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch data!" }, { status: 404 })
    );
  }

  const resData = await response.json();

  return  resData.then()
}

console.log(fetchData());
