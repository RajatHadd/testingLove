export default function BackgroundVideo(props) {
  return (
    <>
      <video src={props.source} loop autoPlay />
    </>
  );
}
