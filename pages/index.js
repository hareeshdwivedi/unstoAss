import { useEffect } from 'react';
import MobileView from '@unstop/components/MobileView'
import DesktopView from '@unstop/components/DesktopView'
import { useAppState } from '@unstop/context'
import useWindowDimensions from '@unstop/Helper/GetDimension';

export default function Home() {
  const { width } = useWindowDimensions()
  const { isDesktop, setIsDesktop} = useAppState()

  useEffect(() => {
    setIsDesktop(width > 720)
  }, [width])

  return (
      isDesktop ?  <DesktopView setIsDesktop={setIsDesktop} /> : <MobileView setIsDesktop={setIsDesktop} />
  )
}
