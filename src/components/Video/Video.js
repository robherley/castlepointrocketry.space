import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styled from 'styled-components'
import { PlayFilled24 as PlayIcon } from '@carbon/icons-react'

import videoPreview from '../../images/misc/video_preview.png'

const VIDEO_LINK = 'https://www.youtube.com/watch?v=ni1DfT1ew8Y'

const VideoContainer = styled.div`
  max-width: 55rem;
  margin: 0 auto;
`

const AspectLock = styled.div`
  /* padding hack for responsive player ratio: 100 / (1280 / 720) */
  padding-top: 56.25%;
  position: relative;

  .player {
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  iframe {
    border-radius: 1rem;
  }
`

const PlayButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -1.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.color.bg};
  background: ${({ theme }) => theme.color.light};
  border-radius: 13%/50%;

  svg {
    margin-right: 0.5rem;
  }
`

const Video = () => (
  <VideoContainer>
    <AspectLock>
      <ReactPlayer
        className="player"
        url={VIDEO_LINK}
        width="100%"
        height="100%"
        light={videoPreview}
        controls={true}
        playIcon={
          <PlayButton>
            <PlayIcon /> Watch our video (2 min)
          </PlayButton>
        }
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
            },
          },
        }}
      />
    </AspectLock>
  </VideoContainer>
)

export default Video
