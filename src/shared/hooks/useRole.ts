import { useMemo } from 'react';
import { useAppSelector } from 'app/config/store';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';

export const useRole = () => {
  const roleIds = useAppSelector(state => state.authentication.account.roleIds);
  const isAdmin = useMemo(() => hasAnyAuthority(roleIds, [AUTHORITIES.ADMINISTRATOR.id]), [roleIds]);
  const isSystem = useMemo(() => hasAnyAuthority(roleIds, [AUTHORITIES.SYSTEM_PRO_ECO_MODULE.id]), [roleIds]);
  const isSale = useMemo(() => hasAnyAuthority(roleIds, [AUTHORITIES.SALE.id]), [roleIds]);
  const isPurchasing = useMemo(() => hasAnyAuthority(roleIds, [AUTHORITIES.PURCHASING.id]), [roleIds]);
  const isDesign = useMemo(() => hasAnyAuthority(roleIds, [AUTHORITIES.DESIGN.id]), [roleIds]);
  const isClient = useMemo(() => hasAnyAuthority(roleIds, [AUTHORITIES.CLIENT.id]), [roleIds]);
  const isAdministrator = isSystem || isAdmin || isSale || isPurchasing || isDesign;

  return {
    isAdministrator,
    isSystem,
    isAdmin,
    isSale,
    isPurchasing,
    isDesign,
    isClient,
  };
};
