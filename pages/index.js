import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <section>
      <h2>Hello, I am {data.firstName}</h2>
      <p>
        <strong>Name:</strong> {data.firstName} {data.lastName}
      </p>
      <p>
        <strong>Twitter-Handle:</strong> {data.twitterName}
      </p>
      <p>
        <strong>Geohash:</strong> {data.geohash}
      </p>
    </section>
  );
}
