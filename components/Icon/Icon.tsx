import React, { forwardRef, HTMLAttributes } from 'react';

import UsersIcon from '@assets/icons/users.svg?react';
import AmountIcon from '@assets/icons/amount.svg?react';
import HomeIcon from '@assets/icons/home.svg?react';
import PollsIcon from '@assets/icons/polls.svg?react';
import PortfolioIcon from '@assets/icons/portfolio.svg?react';
import ProfileIcon from '@assets/icons/profile.svg?react';
import Profile2Icon from '@assets/icons/profile2.svg?react';
import PulseIcon from '@assets/icons/pulse.svg?react';
import PointsIcon from '@assets/icons/points.svg?react';
import SearchIcon from '@assets/icons/search.svg?react';
import SparksIcon from '@assets/icons/sparks.svg?react';
import PoolsIcon from '@assets/icons/pools.svg?react';
import RewardsIcon from '@assets/icons/rewards.svg?react';
import CommentsIcon from '@assets/icons/comments.svg?react';
import ShareIcon from '@assets/icons/share.svg?react';
import ExpandIcon from '@assets/icons/expand.svg?react';
import LeftArrowIcon from '@assets/icons/leftArrow.svg?react';
import RightArrowIcon from '@assets/icons/rightArrow.svg?react';
import AddIcon from '@assets/icons/add.svg?react';
import ReturnIcon from '@assets/icons/return.svg?react';
import CloseIcon from '@assets/icons/close.svg?react';
import SortIcon from '@assets/icons/sort.svg?react';
import FilterIcon from '@assets/icons/filter.svg?react';
import VerifiedIcon from '@assets/icons/verified.svg?react';
import MenuIcon from '@assets/icons/menu.svg?react';
import ArrowUpIcon from '@assets/icons/arrow_up.svg?react';
import LikeIcon from '@assets/icons/like.svg?react';
import DislikeIcon from '@assets/icons/dislike.svg?react';

export const icons = {
    users: UsersIcon,
    amount: AmountIcon,
    home: HomeIcon,
    polls: PollsIcon,
    portfolio: PortfolioIcon,
    profile: ProfileIcon,
    profile2: Profile2Icon,
    pulse: PulseIcon,
    points: PointsIcon,
    search: SearchIcon,
    sparks: SparksIcon,
    pools: PoolsIcon,
    rewards: RewardsIcon,
    expand: ExpandIcon,
    share: ShareIcon,
    comments: CommentsIcon,
    leftArrow: LeftArrowIcon,
    rightArrow: RightArrowIcon,
    add: AddIcon,
    return: ReturnIcon,
    close: CloseIcon,
    sort: SortIcon,
    filter: FilterIcon,
    verified: VerifiedIcon,
    menu: MenuIcon,
    arrowUp: ArrowUpIcon,
    like: LikeIcon,
    dislike: DislikeIcon,
};

export type IconKind = keyof typeof icons;

export type IconProps = {
    name: IconKind;
} & HTMLAttributes<SVGElement>;

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { name, ...otherProps } = props;
    const Tag = icons[name];

    return <Tag {...otherProps} ref={ref} />;
});
