import { useContext, useEffect } from 'react'
import OLTileLayer from 'ol/layer/Tile'
import { useSelector } from 'react-redux'

const TileLayer = ({ source, zIndex = 0 }) => {
  const map = useSelector(store => store.map)

  useEffect(() => {
    if (!map) return

    const tileLayer = new OLTileLayer({
      source,
      zIndex
    })

    map.addLayer(tileLayer)
    tileLayer.setZIndex(zIndex)

    return () => {
      if (map) {
        map.removeLayer(tileLayer)
      }
    }
  }, [map])

  return null
}

export default TileLayer
