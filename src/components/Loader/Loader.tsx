import { cn } from '@/lib/cn'

type LoaderProps = {
  color?: 'white' | 'black'
  size?: 'sm' | 'md' | 'lg'
} & React.HTMLAttributes<HTMLDivElement>

export const Loader: React.FC<LoaderProps> = ({ color = 'white', size = 'sm', ...props }) => {
  const sizes = {
    sm: 'block h-[6px] w-[6px]',
    md: 'block h-[8px] w-[8px]',
    lg: 'block h-[10px] w-[10px]',
  }
  const style = `${sizes[size]} animate-upDown rounded-full bg-${color}/40 delay-0`

  return (
    <div className={cn('flex items-center justify-center gap-[4px]', props.className)} {...props}>
      <span
        className={style}
        style={{
          animationDelay: '0s',
        }}
      />
      <span
        className={style}
        style={{
          animationDelay: '100ms',
        }}
      />
      <span
        className={style}
        style={{
          animationDelay: '200ms',
        }}
      />
    </div>
  )
}
