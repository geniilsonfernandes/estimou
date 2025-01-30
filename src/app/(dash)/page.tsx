import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <div>
        <div aria-label="user info group">
          <div>
            <div>Hello. Welcome back,</div>
            <div>John Doe</div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
            alt="user avatar"
          />
        </div>
        <div>...</div>
      </div>
      <div>Right</div>
    </div>
  );
}
