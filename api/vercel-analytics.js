export async function get(req, res) {
  const token = process.env.VERCEL_API_TOKEN; // Asegúrate de establecer esta variable de entorno en Vercel
  const projectId = "prj_sRRrcFTyVqaqcJKs05ssmiWHTRAk"; // Reemplaza con tu ID de proyecto en Vercel

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
    return new Response("Error al obtener los datos de Vercel Analytics", {
      status: response.status,
    });
  }

  const data = await response.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
