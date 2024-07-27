export async function get(req) {
  const token = process.env.VERCEL_API_TOKEN;
  const projectId = "prj_sRRrcFTyVqaqcJKs05ssmiWHTRAk"; // Reemplaza con tu ID de proyecto en Vercel

  try {
    const response = await fetch(
      `https://api.vercel.com/v1/analytics/projects/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error(
        "Error en la respuesta de la API de Vercel Analytics:",
        response.statusText
      );
      return new Response("Error al obtener los datos de Vercel Analytics", {
        status: response.status,
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(
      "Error al hacer la solicitud a la API de Vercel Analytics:",
      error
    );
    return new Response("Error al obtener los datos de Vercel Analytics", {
      status: 500,
    });
  }
}
