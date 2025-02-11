export const Loader = () => {
  return (
    <div className="flex items-center gap-[4px]">
      <span
        className="animate-upDown block h-[6px] w-[6px] rounded-full bg-white/50 delay-0"
        style={{
          animationDelay: '0s',
        }}
      />
      <span
        className="animate-upDown block h-[6px] w-[6px] rounded-full bg-white/50"
        style={{
          animationDelay: '100ms',
        }}
      />
      <span
        className="animate-upDown delay-400 block h-[6px] w-[6px] rounded-full bg-white/50"
        style={{
          animationDelay: '200ms',
        }}
      />
    </div>
  )
}
