import yayJpg from '../assets/yay.jpg';

export default function HomePage() {

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <div onClick={async ()=>{
         let {ping} = window.versions
         let res = await ping("abcde")
         console.log(res)
         console.log("hereabc")
      }}>dfdfdfdfd</div>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
