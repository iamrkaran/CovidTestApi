import { useEffect, useState, React } from "react";

const Abc = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const options = { method: "GET" };
    fetch("https://data.covid19india.org/v4/min/data.min.json", options)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div class="py-8">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="px-5 py-3 bg-stone-900 text-white hover:bg-cyan-600  border-b border-gray-200   text-left text-sm uppercase font-normal"
                      >
                        State
                      </th>
                      <th
                        scope="col"
                        class="px-5 py-3 bg-stone-900 text-white hover:bg-cyan-600  border-b border-gray-200   text-left text-sm uppercase font-normal"
                      >
                        Confirmed
                      </th>
                      <th
                        scope="col"
                        class="px-5 py-3 bg-stone-900 text-[#ff0000] hover:bg-cyan-600  border-b border-gray-200   text-left text-sm uppercase font-normal"
                      >
                        Tested
                      </th>
                      <th
                        scope="col"
                        class="px-5 py-3 bg-stone-900 text-white hover:bg-cyan-600  border-b border-gray-200   text-left text-sm uppercase font-normal"
                      >
                       vaccinated
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <div class="ml-3">
                          <p class="text-white whitespace-no-wrap">
                            Uttar Pradesh
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-white whitespace-no-wrap">{items.UP.delta.confirmed}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-[#ff0000] whitespace-no-wrap">
                         {items.UP.delta.tested} 
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{items.UP.delta.vaccinated1}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <div class="ml-3">
                          <p class="text-white whitespace-no-wrap">
                          Delhi
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-white whitespace-no-wrap">{items.DL.delta.confirmed}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-[#ff0000] whitespace-no-wrap">
                         {items.DL.delta.tested} 
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{items.DL.delta.vaccinated1}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <div class="ml-3">
                          <p class="text-white whitespace-no-wrap">
                            Uttar Pradesh
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-white whitespace-no-wrap">{items.UP.delta.confirmed}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-[#ff0000] whitespace-no-wrap">
                         {items.UP.delta.tested} 
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{items.UP.delta.vaccinated1}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <div class="ml-3">
                          <p class="text-white whitespace-no-wrap">
                            Uttar Pradesh
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-white whitespace-no-wrap">{items.UP.delta.confirmed}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-[#ff0000] whitespace-no-wrap">
                         {items.UP.delta.tested} 
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{items.UP.delta.vaccinated1}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <div class="ml-3">
                          <p class="text-white whitespace-no-wrap">
                            Uttar Pradesh
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-white whitespace-no-wrap">{items.UP.delta.confirmed}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-[#ff0000] whitespace-no-wrap">
                         {items.UP.delta.tested} 
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{items.UP.delta.vaccinated1}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <div class="ml-3">
                          <p class="text-white whitespace-no-wrap">
                            Panjab
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-white whitespace-no-wrap">{items.PB.delta.confirmed}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-[#ff0000] whitespace-no-wrap">
                         {items.PB.delta.tested} 
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{items.PB.delta.vaccinated1}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <div class="ml-3">
                          <p class="text-white whitespace-no-wrap">
                            Mharastra 
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-white whitespace-no-wrap">{items.MP.delta.confirmed}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <p class="text-[#ff0000] whitespace-no-wrap">
                         {items.MP.delta.tested} 
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-stone-900 text-white hover:bg-cyan-600 text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{items.MP.delta.vaccinated1}</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Abc;
